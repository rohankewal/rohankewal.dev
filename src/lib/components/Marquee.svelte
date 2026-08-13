<script lang="ts">
	import { marqueeItems } from '$lib/data';

	// Items are duplicated so the CSS animation can loop seamlessly.
	let { items = marqueeItems }: { items?: string[] } = $props();
</script>

<div class="relative overflow-hidden border-t border-b border-white/8 py-[26px]">
	<div class="animate-marquee flex w-max gap-14">
		{#each [...items, ...items] as item, i (i)}
			<span
				class="flex items-center gap-14 font-serif text-2xl whitespace-nowrap text-surface2 italic"
			>
				{item} <span class="font-sans text-sm text-accent not-italic">●</span>
			</span>
		{/each}
	</div>
</div>
