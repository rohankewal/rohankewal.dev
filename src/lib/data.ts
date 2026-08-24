import gpAutomateImage from '$lib/assets/projects/gp-automate.png';
import premierMedicalCentreImage from '$lib/assets/projects/premier-medical-centre.png';
import runwayImage from '$lib/assets/projects/runway.png';
import herdrNerdFontImage from '$lib/assets/projects/herdr-nerd-font-tab-name.png';
import pomImage from '$lib/assets/projects/pom.png';

export type ToolGroup = {
	label: string;
	items: string[];
};

// The platforms and tools behind the services, grouped by the job they do so
// the names still say something to someone who doesn't recognise them.
export const toolGroups: ToolGroup[] = [
	{ label: 'Sites & stores', items: ['WordPress', 'Shopify', 'Squarespace'] },
	{ label: 'Custom apps', items: ['Svelte', 'Node.js'] },
	{ label: 'Design', items: ['Figma'] },
	{ label: 'Getting found', items: ['SEO'] },
	{ label: 'Faster delivery', items: ['Claude'] }
];

export type ProductHuntBadge = {
	url: string;
	imageUrl: string;
	alt: string;
};

export type Project = {
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
	productHunt?: ProductHuntBadge;
};

export const projects: Project[] = [
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
		slug: 'premier-medical-centre',
		name: 'Premier Medical Centre',
		tag: 'Healthcare · WordPress',
		image: premierMedicalCentreImage,
		placeholder: 'PREMIER MEDICAL CENTRE — SCREENSHOT',
		placeholderLg: 'PREMIER MEDICAL CENTRE — SCREENSHOT / SITE PREVIEW',
		summary:
			'An NHS GP practice in Wembley. A patient facing site built around the tasks people actually come for: registering, booking, and ordering prescriptions.',
		description:
			'Premier Medical Centre is an NHS GP practice serving Wembley, Brent and Harrow. The site puts the things patients actually need within one click of the homepage: registering with the practice, booking an appointment, ordering a repeat prescription, and booking a blood test. Built and maintained as their freelance WordPress developer, with urgent care guidance surfaced site wide so nobody has to hunt for it.',
		location: 'Healthcare · London, UK',
		url: 'https://premiermedicalcentre.nhs.uk',
		role: 'Freelance WordPress Developer',
		stack: 'WordPress, Elementor, SEO',
		industry: 'Healthcare / NHS Primary Care'
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
		industry: 'SaaS / Fintech for freelancers',
		productHunt: {
			url: 'https://www.producthunt.com/products/runway-6?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-runway-15',
			imageUrl:
				'https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1198244&theme=light&t=1784235413669',
			alt: 'Runway - Know exactly how long your freelance income will last | Product Hunt'
		}
	}
];

export type OpenSourceProject = {
	slug: string;
	name: string;
	image: string;
	imageAlt: string;
	summary: string;
	language: string;
	url: string;
};

export const openSourceProjects: OpenSourceProject[] = [
	{
		slug: 'herdr-nerd-font-tab-name',
		name: 'herdr-nerd-font-tab-name',
		image: herdrNerdFontImage,
		imageAlt: 'herdr terminal tab bar showing Nerd Font icons',
		summary:
			'A plugin that gives every herdr terminal tab a Nerd Font icon for whatever is actually running in it — editor, server, docs, or an AI coding agent. An event-driven watcher resolves the icon and rewrites the label, without clobbering tabs you named yourself.',
		language: 'Python',
		url: 'https://github.com/rohankewal/herdr-nerd-font-tab-name'
	},
	{
		slug: 'pom',
		name: 'pom',
		image: pomImage,
		imageAlt: 'pom running in a terminal, showing a work block, progress bar and keybindings',
		summary:
			'A Pomodoro timer that lives in your terminal. Work blocks and breaks, analytics with a focus heatmap and streaks, 14 themes, lo-fi music, lifecycle hooks, and live state for tmux and herdr status lines — all in a single binary with no runtime dependencies.',
		language: 'Go',
		url: 'https://github.com/rohankewal/pom'
	}
];

export type SkillGroup = {
	mark: string;
	title: string;
	desc: string;
	tags: string[];
};

export const skillGroups: SkillGroup[] = [
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

export type Service = {
	mark: string;
	title: string;
	desc: string;
};

export const services: Service[] = [
	{
		mark: 'W',
		title: 'A website that brings in work',
		desc: 'A custom site that explains what you do and makes it easy to get in touch. Fast on phones, built on WordPress or Squarespace, and set up so you can edit the copy yourself.'
	},
	{
		mark: 'R',
		title: 'A redesign of the site you have',
		desc: "Your business moved on and the site didn't. I rebuild the design and structure and fix what's slow, while keeping the pages search engines already know about."
	},
	{
		mark: 'S',
		title: 'An online store',
		desc: 'Shopify builds and custom theming for selling products. Clear product pages, a checkout that stays out of the way, and a store you can run day to day without calling a developer.'
	},
	{
		mark: 'A',
		title: 'A custom app or tool',
		desc: 'When a website is not enough and off the shelf software does not fit, I build the product itself in Svelte and Node. Designed and shipped end to end, the same way I built Runway.'
	},
	{
		mark: 'F',
		title: 'Getting found in search',
		desc: 'On page SEO, site structure, and page speed so the right people actually land on you. Part of every build, and available on its own for a site that already exists.'
	},
	{
		mark: 'C',
		title: 'Ongoing care after launch',
		desc: 'Someone to email when something breaks or you need a new page. Updates, fixes, small features, and a developer who already knows how your site is put together.'
	}
];

export type PricingTier = {
	name: string;
	price: string;
	tagline: string;
	timeline: string;
	features: string[];
	featured: boolean;
	cta: string;
};

export const pricingTiers: PricingTier[] = [
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

export type ProcessStep = {
	n: string;
	title: string;
	desc: string;
};

export const processSteps: ProcessStep[] = [
	{ n: '01', title: 'Discover', desc: 'Understand the goal, the users, and what "done" looks like.' },
	{ n: '02', title: 'Design', desc: 'Wireframe and design the flows before touching code.' },
	{ n: '03', title: 'Build', desc: 'Ship a fast, clean, maintainable implementation.' },
	{ n: '04', title: 'Support', desc: 'Stick around for updates, fixes, and the next iteration.' }
];
