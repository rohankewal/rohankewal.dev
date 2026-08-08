<script lang="ts">
	import type { Snippet } from 'svelte';

	// The standard page container: centred, max 1180px, fluid side padding.
	// `width="wide"` opts into a roomier container for multi-column grids that
	// need more room per card. Pass vertical spacing through `class`.
	let {
		element = 'section',
		width = 'default',
		class: className = '',
		children
	}: {
		element?: 'section' | 'div';
		width?: 'default' | 'wide';
		class?: string;
		children: Snippet;
	} = $props();

	const maxWidths = {
		default: 'max-w-[1180px]',
		wide: 'max-w-[1440px]'
	};
</script>

<svelte:element
	this={element}
	class="mx-auto {maxWidths[width]} px-[clamp(20px,5vw,64px)] {className}"
>
	{@render children()}
</svelte:element>
