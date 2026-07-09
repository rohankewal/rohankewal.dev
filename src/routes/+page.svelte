<script lang="ts">
	import { marqueeItems, projects } from '$lib/data';
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
			<a
				href="/projects"
				class="group flex flex-col overflow-hidden rounded-[20px] border border-white/10 bg-card transition-colors duration-250 hover:border-accent/35"
			>
				<div class="stripe-bg relative flex min-h-[200px] items-center justify-center">
					<span
						class="rounded-full border border-white/10 bg-bg px-3.5 py-1.5 font-mono text-[13px] tracking-wide text-faint"
					>
						{project.placeholder}
					</span>
				</div>
				<div class="flex flex-col gap-3.5 p-8">
					<span class="text-[13px] tracking-[0.08em] text-accent uppercase">{project.tag}</span>
					<h3 class="font-serif text-[30px] font-normal text-ink">{project.name}</h3>
					<p class="text-[15px] leading-[1.6] text-muted">{project.summary}</p>
					<span class="mt-1 text-sm text-ink">Read the case study →</span>
				</div>
			</a>
		{/each}
	</div>
</section>

<section class="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] pb-[110px]">
	<CtaBand heading="Got a project worth building well?" large />
</section>
