import { posts } from '$lib/blog';
import { siteName, siteUrl } from '$lib/seo';

export const prerender = true;

function escape(value: string) {
	return value
		.replace(/&/g, '&amp;')
		.replace(/</g, '&lt;')
		.replace(/>/g, '&gt;')
		.replace(/"/g, '&quot;');
}

export const GET = async () => {
	const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escape(siteName)}</title>
    <link>${siteUrl}/blog</link>
    <description>Notes on freelance web development, from Rohan Kewalramani.</description>
    <language>en</language>
    <atom:link href="${siteUrl}/rss.xml" rel="self" type="application/rss+xml" />
${posts
	.map(
		(post) => `    <item>
      <title>${escape(post.title)}</title>
      <link>${siteUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(`${post.date}T12:00:00Z`).toUTCString()}</pubDate>
      <description>${escape(post.description)}</description>
    </item>`
	)
	.join('\n')}
  </channel>
</rss>
`;

	return new Response(body, {
		headers: { 'Content-Type': 'application/xml' }
	});
};
