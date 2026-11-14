<script lang="ts">
	import type { Project } from '$lib/data';
	import ArrowLink from '$lib/components/ArrowLink.svelte';
	import ProductHuntBadge from '$lib/components/ProductHuntBadge.svelte';

	// Case study card used in the projects-page grid. Sized to work three-up on
	// large screens, so it stays flexible rather than assuming full width.
	let { project }: { project: Project } = $props();

	// Rendered as a definition list: these are three facts about one thing, and
	// the mono keys give the card a technical register the prose above does not.
	let facts = $derived([
		{ key: 'Role', value: project.role },
		{ key: 'Stack', value: project.stack },
		{ key: 'Industry', value: project.industry }
	]);
</script>

<article class="card card-interactive flex h-full flex-col overflow-hidden">
	<div class="aspect-[16/10] overflow-hidden border-b border-line bg-bg-subtle">
		{#if project.image}
			<img
				src={project.image}
				alt={`${project.name} website screenshot`}
				loading="lazy"
				class="size-full object-cover object-top"
			/>
		{:else}
			<div class="flex size-full items-center justify-center">
				<span class="label">{project.placeholderLg}</span>
			</div>
		{/if}
	</div>

	<div class="flex flex-1 flex-col p-6">
		<span class="label">{project.tag}</span>
		<h2 class="mt-3 text-[19px] font-medium tracking-heading text-ink">{project.name}</h2>
		<p class="mt-2.5 text-[14.5px] leading-[1.65] text-muted">{project.summary}</p>

		<dl class="mt-6 flex flex-col gap-3 border-t border-line pt-5">
			{#each facts as fact (fact.key)}
				<div class="grid grid-cols-[84px_1fr] items-baseline gap-3">
					<dt class="label">{fact.key}</dt>
					<dd class="text-[13.5px] leading-[1.5] text-body">{fact.value}</dd>
				</div>
			{/each}
		</dl>

		<div class="mt-auto flex flex-wrap items-center gap-4 pt-6">
			<ArrowLink href={project.url} label="Visit site" external />
			{#if project.productHunt}
				<ProductHuntBadge badge={project.productHunt} />
			{/if}
		</div>
	</div>
</article>
