<script lang="ts">
	import type { PricingTier } from '$lib/data';
	import Button from '$lib/components/Button.svelte';

	let { tier }: { tier: PricingTier } = $props();
</script>

<div
	class="flex flex-col rounded-[20px] border p-8 transition-[transform,border-color] duration-250 hover:-translate-y-1 {tier.featured
		? 'border-accent/35 bg-gradient-to-br from-surface to-card hover:border-accent/60'
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
			<li class="flex gap-3 text-[15px] leading-[1.5] text-soft">
				<span aria-hidden="true" class="mt-0.5 text-accent">→</span>
				<span>{feature}</span>
			</li>
		{/each}
	</ul>

	<Button
		href="/contact"
		label={tier.cta}
		variant={tier.featured ? 'primary' : 'secondary'}
		size="md"
		class="mt-auto"
	/>
</div>
