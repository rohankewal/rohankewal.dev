import gpAutomateImage from '$lib/assets/projects/gp-automate.png';
import runwayImage from '$lib/assets/projects/runway.png';
import herdrNerdFontImage from '$lib/assets/projects/herdr-nerd-font-tab-name.png';

export const marqueeItems = [
	'WordPress',
	'Shopify',
	'Squarespace',
	'Svelte',
	'Node.js',
	'Figma',
	'SEO',
	'Claude'
];

export const projects: {
	slug: string;
	name: string;
	tag: string;
	image?: string;
	placeholder: string;
	placeholderLg: string;
	summary: string;
	description: string;
	location: string;
	url: string;
	role: string;
	stack: string;
	industry: string;
}[] = [
	{
		slug: 'gp-automate',
		name: 'GP Automate',
		tag: 'Medtech · WordPress',
		image: gpAutomateImage,
		placeholder: 'GP AUTOMATE — SCREENSHOT',
		placeholderLg: 'GP AUTOMATE — SCREENSHOT / SITE PREVIEW',
		summary:
			'A London medtech company automating charting and reports for GPs. Built and maintained as freelance WordPress developer.',
		description:
			'GP Automate helps GPs automate patient charting and reporting, cutting hours of admin work each week. I work with them as their freelance WordPress developer, building and maintaining the marketing site and ongoing feature updates.',
		location: 'Medtech · London, UK',
		url: 'https://gpautomate.com',
		role: 'Freelance WordPress Developer',
		stack: 'WordPress, Custom Theme, SEO',
		industry: 'Healthcare / Medtech'
	},
	{
		slug: 'runway',
		name: 'Runway',
		tag: 'SaaS · Founder & Solo Build',
		image: runwayImage,
		placeholder: 'RUNWAY — SCREENSHOT',
		placeholderLg: 'RUNWAY — SCREENSHOT / PRODUCT PREVIEW',
		summary:
			'A free financial toolkit that tells freelancers how many months their money lasts — invoicing, runway tracking, and an AI advisor built in.',
		description:
			'Runway answers the question every freelancer avoids: how many months can I go without a new client? It\'s a free toolkit that combines a live "runway" countdown, professional invoicing with shareable payment links, and an AI financial advisor ("Fred") that answers questions grounded in your real income, expenses, and pipeline — no bank connection required. I designed and built the entire product solo as founder, from data model to UI to the AI integration.',
		location: 'SaaS · Freelancer financial toolkit',
		url: 'https://freelancerunway.com',
		role: 'Founder & Solo Builder',
		stack: 'Svelte, Tailwind CSS, Supabase, shadcn/ui',
		industry: 'SaaS / Fintech for freelancers'
	}
];

export const openSourceProjects: {
	slug: string;
	name: string;
	image: string;
	summary: string;
	language: string;
	url: string;
}[] = [
	{
		slug: 'herdr-nerd-font-tab-name',
		name: 'herdr-nerd-font-tab-name',
		image: herdrNerdFontImage,
		summary:
			'A plugin that gives every herdr terminal tab a Nerd Font icon for whatever is actually running in it — editor, server, docs, or an AI coding agent. An event-driven watcher resolves the icon and rewrites the label, without clobbering tabs you named yourself.',
		language: 'Python',
		url: 'https://github.com/rohankewal/herdr-nerd-font-tab-name'
	}
];

export const skillGroups = [
	{
		mark: 'P',
		title: 'Platforms & CMS',
		desc: 'Freelance WordPress development, plus custom builds and theming on Shopify and Squarespace — the platforms small businesses actually run on.',
		tags: ['WordPress', 'Shopify', 'Squarespace']
	},
	{
		mark: 'F',
		title: 'Full-Stack Dev',
		desc: 'Product-grade apps when off-the-shelf platforms hit their limits.',
		tags: ['Svelte', 'Node.js']
	},
	{
		mark: 'A',
		title: 'AI-Assisted Workflows',
		desc: 'Using Claude to move faster on content, code, and support without cutting quality.',
		tags: ['Claude']
	},
	{
		mark: 'D',
		title: 'Design',
		desc: 'Interfaces and layouts designed before a line of code is written.',
		tags: ['Figma']
	},
	{
		mark: 'G',
		title: 'Growth',
		desc: 'Sites built to actually get found — structure, speed, and on-page SEO.',
		tags: ['SEO']
	}
];

export const pricingTiers: {
	name: string;
	price: string;
	tagline: string;
	timeline: string;
	features: string[];
	featured: boolean;
	cta: string;
}[] = [
	{
		name: 'Simple',
		price: '$800+',
		tagline: 'Straightforward websites — a marketing site, a landing page, a small shop.',
		timeline: '1–2 weeks',
		features: ['Custom design, not a stock template', 'Fast and mobile-friendly', 'SEO basics covered'],
		featured: false,
		cta: 'Start a project →'
	},
	{
		name: 'Advanced',
		price: '$1,500+',
		tagline: 'More involved builds — bigger sites, custom functionality, or a full web app.',
		timeline: '4+ weeks',
		features: ['Everything in Simple', 'Custom features and integrations'],
		featured: true,
		cta: "Let's scope it →"
	}
];

export const processSteps = [
	{ n: '01', title: 'Discover', desc: 'Understand the goal, the users, and what "done" looks like.' },
	{ n: '02', title: 'Design', desc: 'Wireframe and design the flows before touching code.' },
	{ n: '03', title: 'Build', desc: 'Ship a fast, clean, maintainable implementation.' },
	{ n: '04', title: 'Support', desc: 'Stick around for updates, fixes, and the next iteration.' }
];
