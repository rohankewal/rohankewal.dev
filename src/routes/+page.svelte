<script lang="ts">
	import { projects, pricingTiers, services, toolGroups, wallpaperPacks } from '$lib/data';
	import ArrowLink from '$lib/components/ArrowLink.svelte';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Hero from '$lib/components/Hero.svelte';
	import PricingCard from '$lib/components/PricingCard.svelte';
	import ProjectCard from '$lib/components/ProjectCard.svelte';
	import Section from '$lib/components/Section.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import WallpaperCard from '$lib/components/WallpaperCard.svelte';

	// One vertical rhythm for every band on the page, so the hairlines between
	// them land at even intervals as you scroll.
	const sectionPadding = 'py-[clamp(64px,8vw,104px)]';
</script>

<Seo
	title="Rohan Kewalramani | Freelance WordPress Developer & Full-Stack Web Developer"
	description="Freelance WordPress developer and full-stack engineer based in New Jersey. I build fast, custom WordPress, Shopify, and Squarespace sites plus Svelte/Node full-stack apps for founders and small teams."
	path="/"
/>

<Hero />

<section id="services" class="band">
	<Section element="div" class={sectionPadding}>
		<SectionHeading
			eyebrow="Services"
			title="How I can help"
			lead="Most of this work starts as a business problem rather than a spec. Here's what I take on, and what each one is meant to do for you. If yours doesn't land neatly in one of these, it's still worth an email."
			class="mb-11"
		/>

		<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{#each services as service (service.title)}
				<ServiceCard {service} />
			{/each}
		</div>

		<div class="mt-14">
			<span class="label">What I build with</span>

			<dl class="mt-5">
				{#each toolGroups as group (group.label)}
					<div
						class="grid gap-x-6 gap-y-2.5 border-t border-line py-4 sm:grid-cols-[180px_1fr] sm:items-center"
					>
						<dt class="text-[13.5px] text-muted">{group.label}</dt>
						<dd class="flex flex-wrap gap-1.5">
							{#each group.items as item (item)}
								<span
									class="rounded-full border border-line bg-bg px-2.5 py-1 text-[12.5px] text-body"
								>
									{item}
								</span>
							{/each}
						</dd>
					</div>
				{/each}
			</dl>
		</div>
	</Section>
</section>

<Section class={sectionPadding}>
	<SectionHeading eyebrow="Selected work" title="Recent projects" class="mb-11">
		{#snippet action()}
			<ArrowLink href="/projects" label="See all work" />
		{/snippet}
	</SectionHeading>

	<div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
		{#each projects as project (project.slug)}
			<ProjectCard {project} />
		{/each}
	</div>
</Section>

<!-- Banded so it still alternates against the plain "Selected work" above it. -->
<section class="band">
	<Section element="div" class={sectionPadding}>
		<SectionHeading
			eyebrow="Freelance work"
			title="What it costs"
			lead="Every project is quoted properly once I know the scope — but here's the honest starting point, so you know whether we're in the same ballpark before you email me."
			class="mb-11"
		/>

		<div class="grid gap-4 sm:grid-cols-2">
			{#each pricingTiers as tier (tier.name)}
				<PricingCard {tier} />
			{/each}
		</div>

		<div class="mt-7 flex flex-wrap items-center gap-x-8 gap-y-4">
			<p class="max-w-[620px] text-[14px] leading-[1.65] text-faint">
				Not sure which one you need? Send me what you're trying to build and I'll tell you straight
				— including if it's smaller than you think.
			</p>

			<!-- Pricing is where the "but how does this actually work" questions start,
			     so the FAQ is linked from here rather than only from the nav. -->
			<ArrowLink href="/faq" label="Read the FAQ" />
		</div>
	</Section>
</section>

<!-- Not client work, so it sits after the pricing band rather than among the
     projects, and keeps its own quieter framing. -->
<Section class={sectionPadding}>
	<SectionHeading
		eyebrow="On the side"
		title="I also make wallpapers"
		lead="Paired Light is a small store of mine. Every design is composed twice, once for phone and once for desktop, so neither one is a crop of the other. Both packs have a free download."
		class="mb-11"
	>
		{#snippet action()}
			<ArrowLink href="/wallpapers" label="See the packs" />
		{/snippet}
	</SectionHeading>

	<div class="grid gap-4 sm:grid-cols-2">
		{#each wallpaperPacks as pack (pack.slug)}
			<WallpaperCard {pack} />
		{/each}
	</div>
</Section>

<Section class="pb-[clamp(72px,9vw,120px)]">
	<CtaBand heading="Got a project worth building well?" large />
</Section>
