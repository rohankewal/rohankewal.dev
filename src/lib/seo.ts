import { socialLinks } from '$lib/site';

export const siteUrl = 'https://rohankewal.surge.sh';
export const siteName = 'Rohan Kewalramani';
export const ogImage = '/og-image.png';

export const personSchema = {
	'@context': 'https://schema.org',
	'@graph': [
		{
			'@type': 'Person',
			'@id': `${siteUrl}/#person`,
			name: 'Rohan Kewalramani',
			url: siteUrl,
			image: `${siteUrl}${ogImage}`,
			jobTitle: 'Freelance Web Developer',
			description:
				'Freelance web developer building fast, custom WordPress, Shopify, Squarespace, and full-stack Svelte/Node applications for founders and small teams.',
			address: {
				'@type': 'PostalAddress',
				addressRegion: 'NJ',
				addressCountry: 'US'
			},
			sameAs: socialLinks.map((link) => link.url),
			knowsAbout: [
				'WordPress Development',
				'Shopify Development',
				'Squarespace Development',
				'Svelte',
				'Node.js',
				'SEO',
				'AI-Assisted Development'
			]
		},
		{
			'@type': 'Service',
			name: 'Freelance WordPress Development',
			serviceType: 'WordPress Development',
			provider: { '@id': `${siteUrl}/#person` },
			areaServed: 'Worldwide'
		},
		{
			'@type': 'Service',
			name: 'Shopify Development',
			serviceType: 'Shopify Development',
			provider: { '@id': `${siteUrl}/#person` },
			areaServed: 'Worldwide'
		},
		{
			'@type': 'Service',
			name: 'Squarespace Development',
			serviceType: 'Squarespace Development',
			provider: { '@id': `${siteUrl}/#person` },
			areaServed: 'Worldwide'
		},
		{
			'@type': 'Service',
			name: 'Full-Stack Web Application Development',
			serviceType: 'Full-Stack Development',
			provider: { '@id': `${siteUrl}/#person` },
			areaServed: 'Worldwide'
		}
	]
};
