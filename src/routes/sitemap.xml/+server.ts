import { siteUrl } from '$lib/seo';

export const prerender = true;

const routes = ['', '/projects', '/expertise', '/contact'];

export const GET = async () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((route) => `  <url>\n    <loc>${siteUrl}${route}</loc>\n  </url>`).join('\n')}
</urlset>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
