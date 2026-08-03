<script lang="ts">
	import type { Project } from '$lib/data';
	import Button from '$lib/components/Button.svelte';
	import ProductHuntBadge from '$lib/components/ProductHuntBadge.svelte';

	// Full-width case study card used on the projects page.
	let { project }: { project: Project } = $props();
</script>

<div class="overflow-hidden rounded-[22px] border border-white/10 bg-card">
	<div
		class="relative flex h-[340px] items-center justify-center overflow-hidden {project.image
			? ''
			: 'stripe-bg-lg'}"
	>
		{#if project.image}
			<img
				src={project.image}
				alt={`${project.name} website screenshot`}
				class="h-full w-full object-cover object-top"
			/>
		{:else}
			<span
				class="rounded-full border border-white/10 bg-bg px-4 py-2 font-mono text-sm tracking-wide text-faint"
			>
				{project.placeholderLg}
			</span>
		{/if}
	</div>

	<div class="flex flex-col gap-6 p-[clamp(28px,5vw,52px)]">
		<div class="flex flex-wrap items-start justify-between gap-4">
			<div>
				<h2 class="mb-2 font-serif text-4xl font-normal text-ink">{project.name}</h2>
				<span class="text-[15px] text-muted">{project.location}</span>
			</div>
			<div class="flex flex-wrap items-center gap-3">
				{#if project.productHunt}
					<ProductHuntBadge badge={project.productHunt} size="lg" />
				{/if}
				<Button href={project.url} label="Visit site ↗" size="sm" external />
			</div>
		</div>

		<p class="max-w-[760px] text-[17px] leading-[1.7] text-[#c9c9c4]">
			{project.description}
		</p>

		<div class="flex flex-wrap gap-10 border-t border-white/8 pt-2">
			<div>
				<div class="mb-1.5 text-xs tracking-[0.08em] text-faint uppercase">Role</div>
				<div class="text-[15px] text-ink">{project.role}</div>
			</div>
			<div>
				<div class="mb-1.5 text-xs tracking-[0.08em] text-faint uppercase">Stack</div>
				<div class="text-[15px] text-ink">{project.stack}</div>
			</div>
			<div>
				<div class="mb-1.5 text-xs tracking-[0.08em] text-faint uppercase">Industry</div>
				<div class="text-[15px] text-ink">{project.industry}</div>
			</div>
		</div>
	</div>
</div>
