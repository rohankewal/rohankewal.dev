import { error } from '@sveltejs/kit';
import { getPost, posts } from '$lib/blog';
import type { EntryGenerator, PageLoad } from './$types';

export const prerender = true;

// Hand the prerenderer the slugs up front rather than relying on it crawling
// the index for links. Drafts are absent from `posts`, so they never make it
// into the build at all; preview those with `npm run dev`.
export const entries: EntryGenerator = () => {
	return posts.map((post) => ({ slug: post.slug }));
};

export const load: PageLoad = ({ params }) => {
	const post = getPost(params.slug);
	if (!post) error(404, 'Post not found');

	const index = posts.findIndex((item) => item.slug === post.slug);

	// Only the two fields the prev/next links need — carrying whole posts here
	// would inline their rendered HTML into every neighbouring page's payload.
	const link = (item: (typeof posts)[number] | undefined) =>
		item ? { slug: item.slug, title: item.title } : undefined;

	return {
		post,
		// Older = further down the newest-first list.
		newer: index > 0 ? link(posts[index - 1]) : undefined,
		older: index >= 0 && index < posts.length - 1 ? link(posts[index + 1]) : undefined
	};
};
