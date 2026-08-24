import { EmailMessage } from 'cloudflare:email';

// The site is prerendered, so this Worker exists for exactly one reason: to
// take the contact form POST and mail it on through Cloudflare Email Routing.
// Every other request falls straight through to the static files in build/.

const FROM = 'form@rohankewal.dev';
const TO = 'rkewalramani4@gmail.com';

// Long enough for a real project brief, short enough that nobody can post a
// novel at the inbox.
const LIMITS = { name: 120, email: 200, budget: 60, timeline: 60, project: 4000 };

type Env = {
	ASSETS: { fetch(request: Request): Promise<Response> };
	CONTACT_EMAIL: { send(message: EmailMessage): Promise<void> };
};

export default {
	async fetch(request: Request, env: Env): Promise<Response> {
		const url = new URL(request.url);

		if (url.pathname === '/api/contact') {
			if (request.method !== 'POST') {
				return new Response('Method not allowed', { status: 405, headers: { allow: 'POST' } });
			}
			return handleContact(request, env);
		}

		return env.ASSETS.fetch(request);
	}
};

async function handleContact(request: Request, env: Env): Promise<Response> {
	const wantsJson = (request.headers.get('accept') ?? '').includes('application/json');

	let form: FormData;
	try {
		form = await request.formData();
	} catch {
		return reply(wantsJson, 400, 'That form submission could not be read.');
	}

	// The honeypot is hidden from people and irresistible to bots. Anything that
	// fills it gets a success response so the bot has no signal to tune against.
	if (field(form, 'company')) return reply(wantsJson, 200, '');

	const name = clamp(field(form, 'name'), LIMITS.name);
	const email = clamp(field(form, 'email'), LIMITS.email);
	const project = clamp(field(form, 'project'), LIMITS.project);
	const budget = clamp(field(form, 'budget'), LIMITS.budget);
	const timeline = clamp(field(form, 'timeline'), LIMITS.timeline);

	if (!name || !email || !project) {
		return reply(wantsJson, 400, 'Please fill in your name, your email and what you are building.');
	}
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
		return reply(wantsJson, 400, 'That email address does not look right.');
	}

	const body = [
		`Name:     ${name}`,
		`Email:    ${email}`,
		`Budget:   ${budget || 'Not given'}`,
		`Timeline: ${timeline || 'Not given'}`,
		'',
		project,
		'',
		'Sent from the contact form on rohankewal.dev'
	].join('\n');

	try {
		await env.CONTACT_EMAIL.send(
			new EmailMessage(FROM, TO, buildMessage({ name, email, subject: `New enquiry from ${name}`, body }))
		);
	} catch (error) {
		console.error('contact form send failed', error);
		return reply(wantsJson, 502, `That did not send. Email me directly at ${TO}.`);
	}

	return reply(wantsJson, 200, '');
}

function field(form: FormData, key: string) {
	const value = form.get(key);
	return typeof value === 'string' ? value.trim() : '';
}

function clamp(value: string, limit: number) {
	return value.slice(0, limit);
}

// A header value can never contain a line break, or the rest of it is read as
// new headers. Anything that looks like one becomes a space.
function headerSafe(value: string) {
	return value.replace(/[\r\n]+/g, ' ').trim();
}

// Non-ASCII header values have to be encoded, per RFC 2047, or they arrive as
// mojibake. ASCII passes through untouched so the common case stays readable.
function encodeHeader(value: string) {
	const safe = headerSafe(value);
	// eslint-disable-next-line no-control-regex
	return /^[\x20-\x7e]*$/.test(safe) ? safe : `=?utf-8?B?${base64(safe)}?=`;
}

function base64(value: string) {
	const bytes = new TextEncoder().encode(value);
	let binary = '';
	for (const byte of bytes) binary += String.fromCharCode(byte);
	return btoa(binary);
}

function buildMessage({
	name,
	email,
	subject,
	body
}: {
	name: string;
	email: string;
	subject: string;
	body: string;
}) {
	const headers = [
		`From: rohankewal.dev <${FROM}>`,
		`To: <${TO}>`,
		// So replying in the mail client goes back to whoever filled the form in.
		`Reply-To: ${encodeHeader(name)} <${headerSafe(email)}>`,
		`Subject: ${encodeHeader(subject)}`,
		`Message-ID: <${crypto.randomUUID()}@rohankewal.dev>`,
		`Date: ${new Date().toUTCString()}`,
		'MIME-Version: 1.0',
		'Content-Type: text/plain; charset=utf-8',
		'Content-Transfer-Encoding: base64'
	];

	// base64 bodies are wrapped at 76 characters, which the RFC asks for and
	// some mail servers enforce.
	const encoded = base64(body).replace(/(.{76})/g, '$1\r\n');

	return `${headers.join('\r\n')}\r\n\r\n${encoded}`;
}

// The form is submitted by fetch when JavaScript is available and by the
// browser itself when it is not, so answer in whichever form was asked for.
function reply(wantsJson: boolean, status: number, error: string) {
	if (wantsJson) {
		return Response.json(error ? { error } : { ok: true }, { status });
	}

	const message = error || 'Thanks. That landed in my inbox and I will reply within 24 hours.';

	return new Response(
		`<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">` +
			`<title>${error ? 'Something went wrong' : 'Message sent'} | Rohan Kewalramani</title>` +
			`<body style="background:#181926;color:#cad3f5;font-family:system-ui,sans-serif;padding:14vh 24px;text-align:center">` +
			`<p style="font-size:20px;line-height:1.5;max-width:34em;margin:0 auto 28px">${escapeHtml(message)}</p>` +
			`<a href="/contact" style="color:#eed49f">Back to the contact page</a>`,
		{ status, headers: { 'content-type': 'text/html; charset=utf-8' } }
	);
}

function escapeHtml(value: string) {
	return value.replace(
		/[&<>"']/g,
		(character) =>
			({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[character]!
	);
}
