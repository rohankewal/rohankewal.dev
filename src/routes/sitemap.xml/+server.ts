import { posts } from '$lib/blog';
import { siteUrl } from '$lib/seo';

export const prerender = true;

const staticRoutes = ['', '/projects', '/expertise', '/blog', '/contact'];

export const GET = async () => {
	const entries = [
		...staticRoutes.map((route) => ({ loc: `${siteUrl}${route}`, lastmod: undefined })),
		...posts.map((post) => ({
			loc: `${siteUrl}/blog/${post.slug}`,
			lastmod: post.updated ?? post.date
		}))
	];

	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries
	.map(
		({ loc, lastmod }) =>
			`  <url>\n    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`
	)
	.join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
