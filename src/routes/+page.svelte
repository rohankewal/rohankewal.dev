<script lang="ts">
	import { marqueeItems, projects, pricingTiers } from '$lib/data';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Seo from '$lib/components/Seo.svelte';
</script>

<Seo
	title="Rohan Kewalramani | Freelance WordPress Developer & Full-Stack Web Developer"
	description="Freelance WordPress developer and full-stack engineer based in New Jersey. I build fast, custom WordPress, Shopify, and Squarespace sites plus Svelte/Node full-stack apps for founders and small teams."
	path="/"
/>

<section class="animate-fade-up mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] pt-[min(10vh,90px)] pb-[60px]">
	<div class="mb-7 flex flex-wrap items-center gap-3.5">
		<div class="flex items-center gap-2 rounded-full bg-accent py-2 pr-4 pl-3">
			<span class="animate-pulse-dot h-[9px] w-[9px] rounded-full bg-bg"></span>
			<span class="text-[13px] font-bold tracking-[0.08em] text-bg uppercase">Open to work</span>
		</div>
		<span class="text-sm tracking-wide text-muted">📍 Based in New Jersey, USA</span>
	</div>

	<h1 class="mb-2 font-serif text-[clamp(48px,8vw,104px)] leading-[0.98] font-normal text-ink">
		Rohan <span class="text-accent italic">Kewalramani</span>
	</h1>

	<p class="mb-7 max-w-[820px] text-[clamp(20px,2.6vw,30px)] leading-[1.35] text-[#c9c9c4]">
		Freelance WordPress developer and full‑stack engineer — building fast, custom sites and
		full‑stack apps for founders and small teams who want their site to actually feel
		<span class="font-serif text-ink italic">good</span>.
	</p>

	<p class="mb-10 max-w-[620px] text-[17px] leading-[1.6] text-dim">
		WordPress, Shopify &amp; Squarespace builds, Svelte/Node full‑stack products, and AI‑assisted
		workflows with Claude — plus the design and SEO to back it up.
	</p>

	<div class="flex flex-wrap gap-4">
		<a
			href="/projects"
			class="rounded-full bg-accent px-[30px] py-4 text-[15px] font-semibold text-bg! transition-transform duration-200 hover:scale-105"
		>
			View my work →
		</a>
		<a
			href="/contact"
			class="rounded-full border border-white/18 px-[30px] py-4 text-[15px] font-medium text-ink! transition-transform duration-200 hover:scale-105"
		>
			Get in touch
		</a>
	</div>
</section>

<div class="relative overflow-hidden border-t border-b border-white/8 py-[26px]">
	<div class="animate-marquee flex w-max gap-14">
		{#each [...marqueeItems, ...marqueeItems] as item, i (i)}
			<span class="flex items-center gap-14 font-serif text-2xl whitespace-nowrap text-[#3a3a36] italic">
				{item} <span class="font-sans text-sm text-accent not-italic">●</span>
			</span>
		{/each}
	</div>
</div>

<section class="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] py-24">
	<div class="mb-9 flex flex-wrap items-baseline justify-between gap-3">
		<h2 class="font-serif text-[clamp(30px,4vw,46px)] font-normal text-ink">
			Selected <span class="text-accent italic">work</span>
		</h2>
		<a href="/projects" class="border-b border-white/20 text-[15px] text-muted!">See all work →</a>
	</div>

	<div class="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-6">
		{#each projects as project (project.slug)}
			<div class="relative">
				<a
					href="/projects"
					class="group flex h-full flex-col overflow-hidden rounded-[20px] border border-white/10 bg-card transition-colors duration-250 hover:border-accent/35"
				>
					<div class="relative flex h-[200px] items-center justify-center overflow-hidden {project.image ? '' : 'stripe-bg'}">
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
				{#if project.slug === 'runway'}
					<a
						href="https://www.producthunt.com/products/runway-6?embed=true&utm_source=badge-featured&utm_medium=badge&utm_campaign=badge-runway-15"
						target="_blank"
						rel="noopener noreferrer"
						class="absolute top-3 right-3 z-10 drop-shadow-lg"
					>
						<img
							src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1198244&theme=light&t=1784235413669"
							alt="Runway - Know exactly how long your freelance income will last | Product Hunt"
							width="180"
							height="39"
							class="rounded"
						/>
					</a>
				{/if}
			</div>
		{/each}
	</div>
</section>

<section class="border-t border-white/8 bg-card/40">
	<div class="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] py-24">
		<div class="mb-9 max-w-[640px]">
			<span class="text-sm tracking-[0.08em] text-accent uppercase">Freelance work</span>
			<h2 class="mt-2 mb-4 font-serif text-[clamp(30px,4vw,46px)] font-normal text-ink">
				What it <span class="text-accent italic">costs</span>
			</h2>
			<p class="text-[17px] leading-[1.6] text-muted">
				Every project is quoted properly once I know the scope — but here's the honest starting
				point, so you know whether we're in the same ballpark before you email me.
			</p>
		</div>

		<div class="grid grid-cols-[repeat(auto-fit,minmax(320px,1fr))] gap-6">
			{#each pricingTiers as tier (tier.name)}
				<div
					class="flex flex-col rounded-[20px] border p-8 transition-[transform,border-color] duration-250 hover:-translate-y-1 {tier.featured
						? 'border-accent/35 bg-gradient-to-br from-[#17140b] to-[#0f0f0d] hover:border-accent/60'
						: 'border-white/10 bg-card hover:border-accent/35'}"
				>
					<h3 class="mb-4 font-serif text-[28px] font-normal text-ink">{tier.name}</h3>

					<div class="mb-1 font-serif text-[clamp(38px,5vw,52px)] leading-none text-ink">
						{tier.price}
					</div>
					<div class="mb-5 text-[13px] tracking-[0.06em] text-faint uppercase">
						Typically {tier.timeline}
					</div>

					<p class="mb-6 text-[15px] leading-[1.6] text-muted">{tier.tagline}</p>

					<ul class="mb-8 flex flex-col gap-3">
						{#each tier.features as feature (feature)}
							<li class="flex gap-3 text-[15px] leading-[1.5] text-[#c9c9c4]">
								<span aria-hidden="true" class="mt-0.5 text-accent">→</span>
								<span>{feature}</span>
							</li>
						{/each}
					</ul>

					<a
						href="/contact"
						class="mt-auto w-fit rounded-full px-7 py-3.5 text-[15px] font-semibold transition-transform duration-200 hover:scale-105 {tier.featured
							? 'bg-accent text-bg!'
							: 'border border-white/18 text-ink!'}"
					>
						{tier.cta}
					</a>
				</div>
			{/each}
		</div>

		<p class="mt-8 max-w-[640px] text-sm leading-[1.6] text-faint">
			Not sure which one you need? Send me what you're trying to build and I'll tell you straight —
			including if it's smaller than you think.
		</p>
	</div>
</section>

<section class="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] py-[110px]">
	<CtaBand heading="Got a project worth building well?" large />
</section>
