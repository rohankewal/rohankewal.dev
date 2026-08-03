<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Section from '$lib/components/Section.svelte';
	import { availability, location } from '$lib/site';
</script>

<Section class="animate-fade-up pt-[min(10vh,90px)] pb-[60px]">
	<div class="mb-7 flex flex-wrap items-center gap-3.5">
		<div class="flex items-center gap-2 rounded-full bg-accent py-2 pr-4 pl-3">
			<span class="animate-pulse-dot h-[9px] w-[9px] rounded-full bg-bg"></span>
			<span class="text-[13px] font-bold tracking-[0.08em] text-bg uppercase">{availability}</span>
		</div>
		<span class="text-sm tracking-wide text-muted">📍 Based in {location}</span>
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
		<Button href="/projects" label="View my work →" />
		<Button href="/contact" label="Get in touch" variant="secondary" />
	</div>
</Section>
