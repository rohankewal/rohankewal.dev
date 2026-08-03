<script lang="ts">
	import type { Snippet } from 'svelte';

	// In-page <h2> heading with the trailing words accented. `action` renders alongside
	// the heading (e.g. a "See all work →" link); spacing comes from `class`.
	let {
		eyebrow,
		title,
		accent,
		lead,
		size = 'lg',
		class: className = '',
		action
	}: {
		eyebrow?: string;
		title: string;
		accent: string;
		lead?: string;
		size?: 'sm' | 'md' | 'lg';
		class?: string;
		action?: Snippet;
	} = $props();

	const titleSizes = {
		sm: 'text-[clamp(26px,3.5vw,36px)]',
		md: 'text-[clamp(28px,4vw,40px)]',
		lg: 'text-[clamp(30px,4vw,46px)]'
	};
</script>

<div class={className}>
	{#if eyebrow}
		<span class="text-sm tracking-[0.08em] text-accent uppercase">{eyebrow}</span>
	{/if}

	<h2
		class="font-serif font-normal text-ink {titleSizes[size]} {eyebrow ? 'mt-2' : ''} {lead
			? 'mb-4'
			: ''}"
	>
		{title}
		<span class="text-accent italic">{accent}</span>
	</h2>

	{#if lead}
		<p class="text-[17px] leading-[1.6] text-muted">{lead}</p>
	{/if}

	{@render action?.()}
</div>
