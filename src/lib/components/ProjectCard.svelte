<script lang="ts">
	import type { Project } from '$lib/data';
	import ProductHuntBadge from '$lib/components/ProductHuntBadge.svelte';

	// Compact project card used in the "Selected work" grid on the home page.
	let { project }: { project: Project } = $props();
</script>

<div class="relative">
	<a
		href="/projects"
		class="card card-interactive group flex h-full flex-col overflow-hidden"
	>
		<div class="aspect-[16/10] overflow-hidden border-b border-line bg-bg-subtle">
			{#if project.image}
				<img
					src={project.image}
					alt={`${project.name} website screenshot`}
					loading="lazy"
					class="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
				/>
			{:else}
				<div class="flex size-full items-center justify-center">
					<span class="label">{project.placeholder}</span>
				</div>
			{/if}
		</div>

		<div class="flex flex-1 flex-col p-6">
			<span class="label">{project.tag}</span>
			<h3 class="mt-3 text-[18px] font-medium tracking-heading text-ink">{project.name}</h3>
			<p class="mt-2.5 text-[14.5px] leading-[1.65] text-muted">{project.summary}</p>

			<span
				class="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13.5px] font-medium text-ink transition-colors duration-150 group-hover:text-accent"
			>
				Read the case study
				<span
					aria-hidden="true"
					class="transition-transform duration-200 group-hover:translate-x-0.5"
				>
					→
				</span>
			</span>
		</div>
	</a>

	{#if project.productHunt}
		<ProductHuntBadge badge={project.productHunt} class="absolute top-3 right-3 z-10" />
	{/if}
</div>
