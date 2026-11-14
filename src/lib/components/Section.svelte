<script lang="ts">
	import type { Snippet } from 'svelte';

	// The page container: centred, fluid side padding, one measure. The nav and
	// footer share that measure, so a heading always lines up with the logo
	// above it.
	//
	// Vertical spacing is passed in through `class`, because it belongs to the
	// page's rhythm rather than to the container.
	let {
		element = 'section',
		class: className = '',
		children
	}: {
		element?: 'section' | 'div';
		class?: string;
		children: Snippet;
	} = $props();
</script>

<svelte:element
	this={element}
	class="mx-auto max-w-[1120px] px-[clamp(20px,5vw,56px)] {className}"
>
	{@render children()}
</svelte:element>
