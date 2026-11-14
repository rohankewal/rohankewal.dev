<script lang="ts">
	import type { PricingTier } from '$lib/data';
	import Button from '$lib/components/Button.svelte';

	let { tier }: { tier: PricingTier } = $props();
</script>

<div
	class="card relative flex flex-col p-8 {tier.featured ? 'border-line-strong shadow-card-hover' : ''}"
>
	{#if tier.featured}
		<span
			class="label absolute top-8 right-8 rounded-full border border-line bg-bg-subtle px-2.5 py-1 text-ink"
		>
			Most common
		</span>
	{/if}

	<h3 class="text-[15px] font-medium tracking-heading text-ink">{tier.name}</h3>

	<div class="mt-5 flex items-baseline gap-2">
		<span class="text-[clamp(32px,4vw,40px)] font-medium tracking-display text-ink">
			{tier.price}
		</span>
		<span class="text-[13.5px] text-faint">· {tier.timeline}</span>
	</div>

	<p class="mt-4 text-[14.5px] leading-[1.65] text-muted">{tier.tagline}</p>

	<ul class="mt-7 flex flex-col gap-3 border-t border-line pt-7 pb-8">
		{#each tier.features as feature (feature)}
			<li class="flex gap-2.5 text-[14.5px] leading-[1.5] text-body">
				<svg
					class="mt-[3px] size-[15px] shrink-0 text-accent"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M5 12.5l4.5 4.5L19 7" />
				</svg>
				<span>{feature}</span>
			</li>
		{/each}
	</ul>

	<!-- `mt-auto` so both tiers' buttons sit on the same line even though one
	     lists more features than the other. -->
	<Button
		href="/contact"
		label={tier.cta}
		variant={tier.featured ? 'primary' : 'secondary'}
		arrow
		class="mt-auto w-full justify-center"
	/>
</div>
