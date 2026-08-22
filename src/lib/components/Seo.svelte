<script lang="ts">
	import { siteUrl, siteName, ogImage } from '$lib/seo';

	// `type="article"` adds the published/modified timestamps Google and LinkedIn
	// read off a blog post. Everything else on the site stays a "website".
	let {
		title,
		description,
		path = '/',
		type = 'website',
		published,
		modified
	}: {
		title: string;
		description: string;
		path?: string;
		type?: 'website' | 'article';
		published?: string;
		modified?: string;
	} = $props();

	let url = $derived(`${siteUrl}${path}`);
	const imageUrl = `${siteUrl}${ogImage}`;
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="canonical" href={url} />

	<meta property="og:type" content={type} />
	<meta property="og:site_name" content={siteName} />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />

	{#if type === 'article'}
		{#if published}
			<meta property="article:published_time" content={published} />
		{/if}
		<meta property="article:modified_time" content={modified ?? published} />
		<meta property="article:author" content={siteName} />
	{/if}

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
</svelte:head>
