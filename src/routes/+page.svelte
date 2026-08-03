<script lang="ts">
	import { projects, pricingTiers } from '$lib/data';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import Marquee from '$lib/components/Marquee.svelte';
	import PricingCard from '$lib/components/PricingCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Section from '$lib/components/Section.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Rohan Kewalramani | Freelance WordPress Developer & Full-Stack Web Developer"
	description="Freelance WordPress developer and full-stack engineer based in New Jersey. I build fast, custom WordPress, Shopify, and Squarespace sites plus Svelte/Node full-stack apps for founders and small teams."
	path="/"
/>

<Hero />

<Marquee />

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
