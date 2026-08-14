<script lang="ts">
	import type { Project } from '$lib/data';
	import ProductHuntBadge from '$lib/components/ProductHuntBadge.svelte';

	// Compact project card used in the "Selected work" grid on the home page.
	let { project }: { project: Project } = $props();
</script>

<div class="relative">
	<a
		href="/projects"
		class="group flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-card transition-colors duration-250 hover:border-accent/55"
	>
		<div
			class="relative flex h-[200px] items-center justify-center overflow-hidden {project.image
				? ''
				: 'stripe-bg'}"
		>
			{#if project.image}
				<img
					src={project.image}
					alt={`${project.name} website screenshot`}
					class="h-full w-full object-cover object-top"
				/>
			{:else}
				<span
					class="rounded-full border border-white/10 bg-bg px-3.5 py-1.5 font-mono text-[13px] tracking-wide text-faint"
				>
					{project.placeholder}
				</span>
			{/if}
		</div>
		<div class="flex flex-col gap-3.5 p-8">
			<span class="text-[13px] tracking-[0.08em] text-accent uppercase">{project.tag}</span>
			<h3 class="font-serif text-[30px] font-normal text-ink">{project.name}</h3>
			<p class="text-[15px] leading-[1.6] text-muted">{project.summary}</p>
			<span class="mt-1 text-sm text-ink">Read the case study →</span>
		</div>
	</a>

	{#if project.productHunt}
		<ProductHuntBadge badge={project.productHunt} class="absolute top-3 right-3 z-10 drop-shadow-lg" />
	{/if}
</div>
