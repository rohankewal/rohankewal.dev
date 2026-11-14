<script lang="ts">
	// Top-of-page heading: a mono label, the <h1>, and a lead paragraph.
	// Display sizes stay deliberately moderate — the hierarchy comes from weight,
	// colour and tracking rather than from scale.
	let {
		eyebrow,
		title,
		lead,
		size = 'md',
		class: className = ''
	}: {
		eyebrow?: string;
		title: string;
		lead?: string;
		size?: 'md' | 'lg';
		class?: string;
	} = $props();

	const titleSizes = {
		md: 'text-[clamp(32px,4.4vw,46px)]',
		lg: 'text-[clamp(34px,5vw,54px)]'
	};
</script>

<div class={className}>
	{#if eyebrow}
		<span class="label">{eyebrow}</span>
	{/if}

	<h1
		class="font-medium tracking-display text-ink {titleSizes[size]} leading-[1.08] {eyebrow
			? 'mt-3.5'
			: ''}"
	>
		{title}
	</h1>

	{#if lead}
		<p class="mt-5 max-w-[620px] text-[17px] leading-[1.65] text-muted">{lead}</p>
	{/if}
</div>
