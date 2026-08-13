<script lang="ts">
	import type { Project } from '$lib/data';
	import Button from '$lib/components/Button.svelte';
	import ProductHuntBadge from '$lib/components/ProductHuntBadge.svelte';

	// Case study card used in the projects-page grid. Sized to work three-up on
	// large screens, so it stays flexible rather than assuming full width.
	let { project }: { project: Project } = $props();
</script>

<div class="flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-card">
	<div
		class="relative flex h-[clamp(190px,16vw,230px)] items-center justify-center overflow-hidden {project.image
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

	<div class="flex flex-1 flex-col gap-5 p-[clamp(22px,2vw,30px)]">
		<div>
			<h2 class="mb-2 font-serif text-[clamp(24px,1.9vw,28px)] font-normal text-ink">
				{project.name}
			</h2>
			<span class="text-[14px] text-muted">{project.location}</span>
		</div>

		<p class="text-[15px] leading-[1.65] text-soft">
			{project.summary}
		</p>

		<div class="mt-auto flex flex-col gap-4 border-t border-white/8 pt-4">
			<div class="grid gap-3.5">
				<div>
					<div class="mb-1 text-xs tracking-[0.08em] text-faint uppercase">Role</div>
					<div class="text-[14px] text-ink">{project.role}</div>
				</div>
				<div>
					<div class="mb-1 text-xs tracking-[0.08em] text-faint uppercase">Stack</div>
					<div class="text-[14px] text-ink">{project.stack}</div>
				</div>
				<div>
					<div class="mb-1 text-xs tracking-[0.08em] text-faint uppercase">Industry</div>
					<div class="text-[14px] text-ink">{project.industry}</div>
				</div>
			</div>

			<div class="flex flex-wrap items-center gap-3">
				<Button href={project.url} label="Visit site ↗" size="sm" external />
				{#if project.productHunt}
					<ProductHuntBadge badge={project.productHunt} />
				{/if}
			</div>
		</div>
	</div>
</div>
