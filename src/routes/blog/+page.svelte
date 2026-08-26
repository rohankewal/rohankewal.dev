<script lang="ts">
	import { postSummaries } from '$lib/blog';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PostCard from '$lib/components/PostCard.svelte';
	import Section from '$lib/components/Section.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Blog | Rohan Kewalramani"
	description="Notes on freelance web development: WordPress, Shopify, Svelte and Node builds, SEO, and what actually works when shipping sites for founders and small teams."
	path="/blog"
/>

<!-- The index gets the wide container so three cards have room to breathe. -->
<Section width="wide" class="animate-fade-up pt-5 pb-[100px]">
	<PageHeader
		eyebrow="Writing"
		title="Notes on building for"
		accent="the web"
		lead="What I learn shipping sites and products for founders and small teams. Short pieces, written as they come up."
	/>

	{#if postSummaries.length}
		<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{#each postSummaries as post (post.slug)}
				<PostCard {post} />
			{/each}
		</div>
	{:else}
		<p class="max-w-[560px] text-[17px] leading-[1.6] text-muted">
			First posts are on their way.
		</p>
	{/if}

	<div class="mt-[80px]">
		<CtaBand heading="Got a project that needs building?" buttonLabel="Start a project →" />
	</div>
</Section>
