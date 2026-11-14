<script lang="ts">
	// Wraps the path data held in data.ts in a consistent 24px line-icon frame.
	// `stroke="currentColor"` means an icon takes its colour from whatever it
	// sits inside, so the whole set follows the scheme without any per-icon work.
	let { path, class: className = 'size-[17px]' }: { path: string; class?: string } = $props();
</script>

<svg
	viewBox="0 0 24 24"
	fill="none"
	stroke="currentColor"
	stroke-width="1.6"
	stroke-linecap="round"
	stroke-linejoin="round"
	class={className}
	aria-hidden="true"
>
	<!-- eslint-disable-next-line svelte/no-at-html-tags -- our own path data, not user input -->
	{@html path}
</svg>
