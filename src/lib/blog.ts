import { marked } from 'marked';

// Posts live as markdown files in src/posts/. Each one is read at build time,
// its frontmatter parsed, and its body rendered to HTML — the whole blog is
// baked into the static build, so there is nothing to run at request time.

export type Post = {
	slug: string;
	title: string;
	description: string;
	date: string; // ISO yyyy-mm-dd, the date the piece was originally published
	updated?: string;
	tags: string[];
	draft: boolean;
	html: string;
	readingMinutes: number;
};

export type PostSummary = Omit<Post, 'html'>;

const files = import.meta.glob('/src/posts/*.md', {
	query: '?raw',
	import: 'default',
	eager: true
}) as Record<string, string>;

// `README.md` documents the folder and `_template.md` is there to be copied.
// Neither is a post, so anything starting with `_` or named README is skipped.
function isPost(path: string) {
	const name = path.split('/').pop()!;
	return !name.startsWith('_') && name.toLowerCase() !== 'readme.md';
}

// Frontmatter is a deliberately small subset of YAML: `key: value` per line,
// with optional quotes and an optional [a, b] list. That covers everything a
// post needs and keeps the parser small enough to read in one sitting.
function parseFrontmatter(raw: string) {
	const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(raw);
	if (!match) return { data: {} as Record<string, string | string[]>, body: raw };

	const data: Record<string, string | string[]> = {};

	for (const line of match[1].split(/\r?\n/)) {
		const field = /^([A-Za-z_][\w-]*):\s*(.*)$/.exec(line.trim());
		if (!field) continue;

		const [, key] = field;
		let value = field[2].trim();

		if (value.startsWith('[') && value.endsWith(']')) {
			data[key] = value
				.slice(1, -1)
				.split(',')
				.map((item) => unquote(item.trim()))
				.filter(Boolean);
			continue;
		}

		data[key] = unquote(value);
	}

	return { data, body: raw.slice(match[0].length) };
}

function unquote(value: string) {
	return value.replace(/^['"]|['"]$/g, '');
}

function asString(value: string | string[] | undefined, fallback = '') {
	return typeof value === 'string' ? value : fallback;
}

// ~200 wpm on the plain text, rounded up, floored at 1.
function estimateReadingMinutes(body: string) {
	const words = body.replace(/[#*_`>[\]()!-]/g, ' ').split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(words / 200));
}

function slugFromPath(path: string) {
	return path.split('/').pop()!.replace(/\.md$/, '');
}

marked.setOptions({ gfm: true, breaks: false });

const all: Post[] = Object.entries(files)
	.filter(([path]) => isPost(path))
	.map(([path, raw]) => {
		const { data, body } = parseFrontmatter(raw);
		const slug = asString(data.slug) || slugFromPath(path);

		const title = asString(data.title);
		const date = asString(data.date);

		if (!title) throw new Error(`Post ${path} is missing a "title" in its frontmatter`);
		if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
			throw new Error(`Post ${path} needs a "date" in YYYY-MM-DD form (got "${date}")`);
		}

		return {
			slug,
			title,
			description: asString(data.description),
			date,
			updated: asString(data.updated) || undefined,
			tags: Array.isArray(data.tags) ? data.tags : [],
			draft: asString(data.draft) === 'true',
			html: marked.parse(body) as string,
			readingMinutes: estimateReadingMinutes(body)
		};
	})
	// Newest first. Back-dated posts slot into place automatically.
	.sort((a, b) => b.date.localeCompare(a.date));

// Drafts stay out of the index, the sitemap and the feed, but the page still
// builds so you can preview it at its URL.
export const posts: Post[] = all.filter((post) => !post.draft);

export const postSummaries: PostSummary[] = posts.map(({ html: _html, ...summary }) => summary);

export function getPost(slug: string): Post | undefined {
	return all.find((post) => post.slug === slug);
}

export function formatDate(date: string) {
	return new Date(`${date}T12:00:00Z`).toLocaleDateString('en-US', {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		timeZone: 'UTC'
	});
}
