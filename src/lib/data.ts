import gpAutomateImage from '$lib/assets/projects/gp-automate.png';
import premierMedicalCentreImage from '$lib/assets/projects/premier-medical-centre.png';
import runwayImage from '$lib/assets/projects/runway.png';
import herdrNerdFontImage from '$lib/assets/projects/herdr-nerd-font-tab-name.png';
import pomImage from '$lib/assets/projects/pom.png';
import glassFluxImage from '$lib/assets/wallpapers/glass-flux.jpg';
import glassFluxSamplerImage from '$lib/assets/wallpapers/glass-flux-sampler.jpg';
import notebookFoldImage from '$lib/assets/wallpapers/notebook-fold.jpg';
import notebookFoldFreeImage from '$lib/assets/wallpapers/notebook-fold-free.jpg';

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

// Inner markup for a 24px line icon, rendered by Icon.svelte. Held as path data
// rather than as components so a service or skill stays one object in one list,
// and so there is no icon dependency to keep up to date.
const icons = {
	globe:
		'<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.6 2.7 2.6 15.3 0 18"/><path d="M12 3c-2.6 2.7-2.6 15.3 0 18"/>',
	refresh:
		'<path d="M20.5 11A8.5 8.5 0 0 0 6.3 5.7L3 9"/><path d="M3 4v5h5"/><path d="M3.5 13A8.5 8.5 0 0 0 17.7 18.3L21 15"/><path d="M21 20v-5h-5"/>',
	bag: '<path d="M5 8h14l-1.1 12H6.1L5 8Z"/><path d="M9 8V6.5a3 3 0 0 1 6 0V8"/>',
	code: '<path d="M9 7l-5 5 5 5"/><path d="M15 7l5 5-5 5"/>',
	frames:
		'<rect x="3" y="6" width="9" height="12" rx="1.6"/><rect x="14.5" y="8.5" width="6.5" height="7" rx="1.2"/>',
	download: '<path d="M12 4v11"/><path d="m7.5 10.5 4.5 4.5 4.5-4.5"/><path d="M4 20h16"/>',
	gift:
		'<rect x="3.5" y="9" width="17" height="11" rx="1.8"/><path d="M3.5 13h17"/><path d="M12 9v11"/><path d="M12 9S9.8 4.5 7.8 5.3 8.5 9 12 9Z"/><path d="M12 9s2.2-4.5 4.2-3.7S15.5 9 12 9Z"/>',
	search: '<circle cx="11" cy="11" r="7"/><path d="M16.2 16.2 21 21"/>',
	shield: '<path d="M12 21s-7-4.2-7-10V6.2L12 3l7 3.2V11c0 5.8-7 10-7 10Z"/><path d="M9.3 12l1.9 2 3.5-4"/>',
	layers: '<path d="M12 3 3 7.5l9 4.5 9-4.5L12 3Z"/><path d="M3 12.5 12 17l9-4.5"/>',
	server:
		'<rect x="3" y="4" width="18" height="6.5" rx="2"/><rect x="3" y="13.5" width="18" height="6.5" rx="2"/><path d="M7 7.2h.01"/><path d="M7 16.8h.01"/>',
	sparkle:
		'<path d="M11 3.5 12.7 8 17.2 9.7 12.7 11.4 11 15.9 9.3 11.4 4.8 9.7 9.3 8 11 3.5Z"/><path d="M18 15.5l.8 2 2 .8-2 .8-.8 2-.8-2-2-.8 2-.8.8-2Z"/>',
	pen: '<path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1.5L4.5 16 16.5 3.5Z"/><path d="M15 5.2 17.8 8"/>',
	trend: '<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'
};

export type SkillGroup = {
	icon: string;
	title: string;
	desc: string;
	tags: string[];
};

export const skillGroups: SkillGroup[] = [
	{
		icon: icons.layers,
		title: 'Platforms & CMS',
		desc: 'Freelance WordPress development, plus custom builds and theming on Shopify and Squarespace — the platforms small businesses actually run on.',
		tags: ['WordPress', 'Shopify', 'Squarespace']
	},
	{
		icon: icons.server,
		title: 'Full-Stack Dev',
		desc: 'Product-grade apps when off-the-shelf platforms hit their limits.',
		tags: ['Svelte', 'Node.js']
	},
	{
		icon: icons.sparkle,
		title: 'AI-Assisted Workflows',
		desc: 'Using Claude to move faster on content, code, and support without cutting quality.',
		tags: ['Claude']
	},
	{
		icon: icons.pen,
		title: 'Design',
		desc: 'Interfaces and layouts designed before a line of code is written.',
		tags: ['Figma']
	},
	{
		icon: icons.trend,
		title: 'Growth',
		desc: 'Sites built to actually get found — structure, speed, and on-page SEO.',
		tags: ['SEO']
	}
];

export type Service = {
	icon: string;
	title: string;
	desc: string;
};

export const services: Service[] = [
	{
		icon: icons.globe,
		title: 'A website that brings in work',
		desc: 'A custom site that explains what you do and makes it easy to get in touch. Fast on phones, built on WordPress or Squarespace, and set up so you can edit the copy yourself.'
	},
	{
		icon: icons.refresh,
		title: 'A redesign of the site you have',
		desc: "Your business moved on and the site didn't. I rebuild the design and structure and fix what's slow, while keeping the pages search engines already know about."
	},
	{
		icon: icons.bag,
		title: 'An online store',
		desc: 'Shopify builds and custom theming for selling products. Clear product pages, a checkout that stays out of the way, and a store you can run day to day without calling a developer.'
	},
	{
		icon: icons.code,
		title: 'A custom app or tool',
		desc: 'When a website is not enough and off the shelf software does not fit, I build the product itself in Svelte and Node. Designed and shipped end to end, the same way I built Runway.'
	},
	{
		icon: icons.search,
		title: 'Getting found in search',
		desc: 'On page SEO, site structure, and page speed so the right people actually land on you. Part of every build, and available on its own for a site that already exists.'
	},
	{
		icon: icons.shield,
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
		cta: 'Start a project'
	},
	{
		name: 'Advanced',
		price: '$1,500+',
		tagline: 'More involved builds — bigger sites, custom functionality, or a full web app.',
		timeline: '4+ weeks',
		features: ['Everything in Simple', 'Custom features and integrations'],
		featured: true,
		cta: "Let's scope it"
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

export type Faq = {
	q: string;
	a: string;
};

// Ordered the way a prospective client works through them: what it costs and
// how long it takes first, then what they end up owning, then the longer-term
// questions. Every answer here is a policy or a fact about how I work, so each
// one has to stay true as the business changes.
export const faqs: Faq[] = [
	{
		q: 'What does a project cost?',
		a: 'Simple sites start at $800 and usually take one to two weeks. More involved builds start at $1,500 and run from four weeks. Those are starting points rather than fixed prices, and I quote properly once I know the scope. Send me what you are trying to build and I will tell you straight, including if it is smaller than you think.'
	},
	{
		q: 'How long does it take?',
		a: 'A simple site is usually one to two weeks. Bigger builds run from four weeks. Those timelines assume content and feedback come back as we go, so the fastest projects are the ones where that part is ready.'
	},
	{
		q: 'How do payments work?',
		a: 'Half upfront to get started, half before the site goes live. You get an invoice for each, and we agree the total before any work begins.'
	},
	{
		q: 'Who owns the site when it is finished?',
		a: 'You do. The site, the code, and the accounts are yours once the final invoice is paid. Nothing is held back, and you are not locked into working with me to keep it running.'
	},
	{
		q: 'Do you handle hosting and the domain?',
		a: 'I set both up and configure them. The accounts go in your name and you pay the provider directly, so you own them and can move them whenever you want.'
	},
	{
		q: 'Can I edit the site myself afterwards?',
		a: 'Yes. I set sites up so you can change copy, images, and pages without calling a developer, and I walk you through how it works before we finish.'
	},
	{
		q: 'What happens after launch?',
		a: 'Whichever suits you. Some clients keep me on a monthly retainer that covers updates, fixes, and small changes. Others email when something comes up and I bill it then. You can start with one and switch later.'
	},
	{
		q: 'Will a redesign hurt my search rankings?',
		a: 'That is the part I am most careful about on a redesign. I keep the pages search engines already know about and map anything that has to move, so the rankings you have now carry across.'
	},
	{
		q: 'Do you do SEO on its own?',
		a: 'Yes. On page SEO, site structure, and page speed are part of every build, and I also take them on for a site that already exists.'
	},
	{
		q: 'Do you work with clients outside New Jersey?',
		a: 'Yes. I am based in New Jersey and work remotely. Two of the projects on this site are for clients in London.'
	},
	{
		q: 'What do you need from me to get started?',
		a: 'A rough idea of what you need, roughly when you need it, and a budget range if you have one. That is enough for me to come back with something useful instead of more questions.'
	}
];

/* ---------------------------------------------------------------------------
   Paired Light
   ---------------------------------------------------------------------------
   The wallpaper store. Everything sells through Gumroad, so this file only
   describes the packs and links out — there is no cart or checkout here.

   Prices and counts below mirror the Gumroad listings. If a pack changes
   price or gains designs there, change it here too, because nothing fetches
   it at build time.

   The store's own name, URL and tagline live in site.ts, next to the other
   site-level constants, because seo.ts needs the URL too.
--------------------------------------------------------------------------- */

// `url` below is the plain product page. Every buy button runs it through
// this first, because Gumroad skips the product page and opens its checkout
// with the item already in the cart when the link carries `?wanted=true`.
//
// Pay-what-you-want products ignore it: Gumroad has to collect a price before
// it can check anyone out, so the two free downloads land on the product page
// and its "name a fair price" form either way. Harmless there, so the buttons
// are all built the same way rather than splitting into two rules.
export function checkoutUrl(productUrl: string) {
	return `${productUrl}${productUrl.includes('?') ? '&' : '?'}wanted=true`;
}

export type WallpaperFreebie = {
	name: string;
	blurb: string;
	image: string;
	imageAlt: string;
	url: string;
};

export type WallpaperPack = {
	slug: string;
	name: string;
	tag: string;
	image: string;
	imageAlt: string;
	summary: string;
	price: string;
	specs: string[];
	url: string;
	freebie: WallpaperFreebie;
};

export const wallpaperPacks: WallpaperPack[] = [
	{
		slug: 'glass-flux',
		name: 'Glass Flux',
		tag: 'Abstract · Dark',
		image: glassFluxImage,
		imageAlt:
			'Glass Flux wallpaper shown on a laptop and an iPhone, a glassy blue and pink ribbon curving across a near-black background',
		summary:
			'Twenty four abstract designs in deep, dark tones, split across four series: Silk, Glass, Flow and Dunes. Each one comes as a phone wallpaper and a 5K desktop wallpaper.',
		price: '$7',
		specs: ['24 designs', '5K desktop', 'Phone + desktop'],
		url: 'https://pairedlight.gumroad.com/l/glassflux-wallpapers',
		freebie: {
			name: 'Free Glass Flux sampler',
			blurb:
				'Three of the twenty four designs, Velvet Dusk, Rosé Glass and Neon Drift, in the same full quality files as the paid pack.',
			image: glassFluxSamplerImage,
			imageAlt:
				'Glass Flux free sampler cover showing the Velvet Dusk, Rosé Glass and Neon Drift designs on laptop and phone mockups',
			url: 'https://pairedlight.gumroad.com/l/glassflux-sampler'
		}
	},
	{
		slug: 'notebook-fold',
		name: 'Notebook Fold',
		tag: 'Foldables · Clothbound',
		image: notebookFoldImage,
		imageAlt:
			'Notebook Fold wallpaper on a folding phone, a green clothbound notebook cover on the outer screen continuing across the open inner screen',
		summary:
			'Clothbound notebook covers for folding phones, in eight colors. Every color is sized for the cover screen and the inner screen, so the phone reads as one notebook whether it is shut or open.',
		price: '$5',
		specs: ['8 colors', 'Cover + inner screen', 'Built for foldables'],
		url: 'https://pairedlight.gumroad.com/l/notebook-fold',
		freebie: {
			name: 'Free Notebook Fold: Forest Green',
			blurb:
				'The Forest Green cover on its own, so you can see how one of these sits on your phone before paying for the other seven.',
			image: notebookFoldFreeImage,
			imageAlt:
				'Notebook Fold Forest Green wallpaper shown on a folding phone, closed and open',
			url: 'https://pairedlight.gumroad.com/l/notebook-fold-free'
		}
	}
];

export type StoreNote = {
	icon: string;
	title: string;
	desc: string;
};

export const storeNotes: StoreNote[] = [
	{
		icon: icons.frames,
		title: 'Composed, not cropped',
		desc: 'Each design is laid out again for every screen it ships for, rather than one image resized down and cut to fit.'
	},
	{
		icon: icons.download,
		title: 'Instant download',
		desc: 'Checkout is handled by Gumroad. Pay and the ZIP downloads straight away.'
	},
	{
		icon: icons.gift,
		title: 'Free before paid',
		desc: 'Both packs have a free download, so you can put the files on your own phone before deciding whether the rest is worth it.'
	}
];
