<script lang="ts">
	import type { Snippet } from 'svelte';

	// In-page <h2> heading. `action` renders opposite the heading on wide screens
	// (e.g. a "See all work" link) and drops below it on narrow ones.
	let {
		eyebrow,
		title,
		lead,
		size = 'md',
		class: className = '',
		action
	}: {
		eyebrow?: string;
		title: string;
		lead?: string;
		size?: 'sm' | 'md';
		class?: string;
		action?: Snippet;
	} = $props();

	const titleSizes = {
		sm: 'text-[clamp(21px,2.4vw,25px)]',
		md: 'text-[clamp(25px,3.2vw,33px)]'
	};
</script>

<div class="flex flex-wrap items-end justify-between gap-x-8 gap-y-4 {className}">
	<div class="max-w-[640px]">
		{#if eyebrow}
			<span class="label">{eyebrow}</span>
		{/if}

		<h2
			class="font-medium tracking-display text-ink {titleSizes[size]} leading-[1.15] {eyebrow
				? 'mt-3'
				: ''}"
		>
			{title}
		</h2>

		{#if lead}
			<p class="mt-4 text-[16px] leading-[1.65] text-muted">{lead}</p>
		{/if}
	</div>

	{@render action?.()}
</div>
