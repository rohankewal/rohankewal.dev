<script lang="ts">
	import { formatDate } from '$lib/blog';
	import { siteUrl, siteName, ogImage } from '$lib/seo';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';

	let { data } = $props();
	let post = $derived(data.post);

	// BlogPosting markup, so search results can show the byline and date.
	let articleSchema = $derived({
		'@context': 'https://schema.org',
		'@type': 'BlogPosting',
		headline: post.title,
		description: post.description,
		datePublished: post.date,
		dateModified: post.updated ?? post.date,
		url: `${siteUrl}/blog/${post.slug}`,
		mainEntityOfPage: `${siteUrl}/blog/${post.slug}`,
		image: `${siteUrl}${ogImage}`,
		keywords: post.tags.join(', '),
		author: { '@id': `${siteUrl}/#person`, '@type': 'Person', name: siteName },
		publisher: { '@id': `${siteUrl}/#person` }
	});
</script>

<Seo
	title="{post.title} | Rohan Kewalramani"
	description={post.description}
	path="/blog/{post.slug}"
	type="article"
	published={post.date}
	modified={post.updated}
/>

<svelte:head>
	{@html `<script type="application/ld+json">${JSON.stringify(articleSchema)}<\/script>`}
</svelte:head>

<Section element="div" class="animate-fade-up pt-5 pb-[100px]">
	<article class="max-w-[720px]">
		<a href="/blog" class="text-sm text-muted! hover:text-accent!">← All posts</a>

		<div class="mt-8 flex flex-wrap items-center gap-3 text-[13px] tracking-[0.06em] uppercase">
			<time datetime={post.date} class="text-accent">{formatDate(post.date)}</time>
			<span class="text-faint">{post.readingMinutes} min read</span>
		</div>

		<h1
			class="mt-3 mb-6 font-serif text-[clamp(36px,5.5vw,60px)] leading-[1.08] font-normal text-ink"
		>
			{post.title}
		</h1>

		{#if post.description}
			<p class="mb-10 text-[20px] leading-[1.55] text-soft">{post.description}</p>
		{/if}

		<div class="prose">
			<!-- eslint-disable-next-line svelte/no-at-html-tags -- our own markdown, rendered at build time -->
			{@html post.html}
		</div>

		{#if post.tags.length}
			<div class="mt-12 flex flex-wrap gap-2 border-t border-white/8 pt-8">
				{#each post.tags as tag (tag)}
					<span
						class="rounded-full border border-white/10 bg-card px-3 py-1 text-[12px] tracking-wide text-dim"
					>
						{tag}
					</span>
				{/each}
			</div>
		{/if}

		{#if data.newer || data.older}
			<nav class="mt-10 grid gap-4 border-t border-white/8 pt-8 sm:grid-cols-2">
				{#if data.older}
					<a
						href="/blog/{data.older.slug}"
						class="rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-250 hover:border-accent/55"
					>
						<span class="text-[12px] tracking-[0.08em] text-faint uppercase">← Older</span>
						<span class="mt-2 block font-serif text-xl text-ink!">{data.older.title}</span>
					</a>
				{/if}

				{#if data.newer}
					<a
						href="/blog/{data.newer.slug}"
						class="rounded-2xl border border-white/10 bg-card p-6 transition-colors duration-250 hover:border-accent/55 sm:col-start-2 sm:text-right"
					>
						<span class="text-[12px] tracking-[0.08em] text-faint uppercase">Newer →</span>
						<span class="mt-2 block font-serif text-xl text-ink!">{data.newer.title}</span>
					</a>
				{/if}
			</nav>
		{/if}
	</article>

	<div class="mt-[80px]">
		<CtaBand heading="Need something like this built?" buttonLabel="Get in touch →" />
	</div>
</Section>
