<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import Section from '$lib/components/Section.svelte';
	import { availability, location, replyTime } from '$lib/site';
</script>

<Section class="animate-fade-up pt-[clamp(56px,9vh,96px)] pb-[clamp(60px,8vw,92px)]">
	<div class="flex flex-wrap items-center gap-x-3 gap-y-2">
		<span
			class="inline-flex items-center gap-2 rounded-full border border-line bg-bg-subtle py-1.5 pr-3 pl-2.5 text-[12.5px] font-medium text-body"
		>
			<span
				aria-hidden="true"
				class="animate-pulse-dot size-[7px] rounded-full bg-success"
			></span>
			{availability}
		</span>
		<span class="text-[13px] text-faint">{location}</span>
	</div>

	<h1
		class="mt-7 text-[clamp(38px,6vw,58px)] leading-[1.04] font-medium tracking-display text-ink"
	>
		Rohan Kewalramani
	</h1>

	<p class="mt-4 max-w-[640px] text-[clamp(18px,2.1vw,21px)] leading-[1.4] text-ink">
		Freelance web developer and full-stack engineer.
	</p>

	<p class="mt-5 max-w-[620px] text-[16.5px] leading-[1.7] text-muted">
		I build fast, custom sites and full-stack apps for founders and small teams — WordPress,
		Shopify and Squarespace builds, Svelte and Node products, and AI-assisted workflows with
		Claude, plus the design and SEO to back them up.
	</p>

	<div class="mt-9 flex flex-wrap items-center gap-3">
		<Button href="/contact" label="Get in touch" size="lg" arrow />
		<Button href="/projects" label="View my work" variant="secondary" size="lg" />
	</div>

	<p class="mt-5 text-[13px] text-faint">{replyTime}</p>
</Section>
