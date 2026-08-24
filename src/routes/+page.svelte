<script lang="ts">
	import { projects, pricingTiers, services, toolGroups } from '$lib/data';
	import { postSummaries } from '$lib/blog';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import PostPreviewCard from '$lib/components/PostPreviewCard.svelte';
	import PricingCard from '$lib/components/PricingCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Section from '$lib/components/Section.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Rohan Kewalramani | Freelance WordPress Developer & Full-Stack Web Developer"
	description="Freelance WordPress developer and full-stack engineer based in New Jersey. I build fast, custom WordPress, Shopify, and Squarespace sites plus Svelte/Node full-stack apps for founders and small teams."
	path="/"
/>

<Hero />

<section id="services" class="border-t border-white/8 bg-card/40">
	<Section element="div" class="py-24">
		<SectionHeading
			eyebrow="Services"
			title="How I can"
			accent="help"
			lead="Most of this work starts as a business problem rather than a spec. Here's what I take on, and what each one is meant to do for you. If yours doesn't land neatly in one of these, it's still worth an email."
			class="mb-9 max-w-[680px]"
		/>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
			{#each services as service (service.title)}
				<ServiceCard {service} />
			{/each}
		</div>

		<div class="mt-12 border-t border-white/8 pt-8">
			<span class="text-[13px] tracking-[0.08em] text-faint uppercase">What I build with</span>

			<div class="mt-6 grid gap-x-12 gap-y-5 sm:grid-cols-2">
				{#each toolGroups as group (group.label)}
					<div class="flex flex-wrap items-center gap-x-4 gap-y-2">
						<span class="w-[132px] shrink-0 text-[13px] tracking-[0.06em] text-accent uppercase">
							{group.label}
						</span>

						<div class="flex flex-wrap gap-2">
							{#each group.items as item (item)}
								<span
									class="rounded-full border border-white/10 bg-card px-3.5 py-1.5 text-sm tracking-wide text-soft"
								>
									{item}
								</span>
							{/each}
						</div>
					</div>
				{/each}
			</div>
		</div>
	</Section>
</section>

<Section class="py-24">
	<SectionHeading
		title="Selected"
		accent="work"
		class="mb-9 flex flex-wrap items-baseline justify-between gap-3"
	>
		{#snippet action()}
			<a href="/projects" class="border-b border-white/20 text-[15px] text-muted!">See all work →</a>
		{/snippet}
	</SectionHeading>

	<div class="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
		{#each projects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>

{#if postSummaries.length}
	<section class="border-t border-white/8">
		<Section element="div" class="py-24">
			<SectionHeading
				eyebrow="Writing"
				title="Recent"
				accent="notes"
				class="mb-9 flex flex-wrap items-baseline justify-between gap-3"
			>
				{#snippet action()}
					<a href="/blog" class="border-b border-white/20 text-[15px] text-muted!">Read the blog →</a>
				{/snippet}
			</SectionHeading>

			<div class="grid gap-6 sm:grid-cols-2">
				{#each postSummaries.slice(0, 4) as post (post.slug)}
					<PostPreviewCard {post} />
				{/each}
			</div>
		</Section>
	</section>
{/if}

<section class="border-t border-white/8 bg-card/40">
	<Section element="div" class="py-24">
		<SectionHeading
			eyebrow="Freelance work"
			title="What it"
			accent="costs"
			lead="Every project is quoted properly once I know the scope — but here's the honest starting point, so you know whether we're in the same ballpark before you email me."
			class="mb-9 max-w-[640px]"
		/>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
			{#each pricingTiers as tier (tier.name)}
				<PricingCard {tier} />
			{/each}
		</div>

		<p class="mt-8 max-w-[640px] text-sm leading-[1.6] text-faint">
			Not sure which one you need? Send me what you're trying to build and I'll tell you straight —
			including if it's smaller than you think.
		</p>
	</Section>
</section>

<Section class="py-[110px]">
	<CtaBand heading="Got a project worth building well?" large />
</Section>
