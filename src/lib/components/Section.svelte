<script lang="ts">
	import type { Snippet } from 'svelte';

	// The standard page container: centred, max 1180px, fluid side padding.
	// Pass vertical spacing (and anything else) through `class`.
	let {
		element = 'section',
		class: className = '',
		children
	}: { element?: 'section' | 'div'; class?: string; children: Snippet } = $props();
</script>

<svelte:element
	this={element}
	class="mx-auto max-w-[1180px] px-[clamp(20px,5vw,64px)] {className}"
>
	{@render children()}
</svelte:element>
