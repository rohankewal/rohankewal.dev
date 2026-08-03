<script lang="ts">
	import type { ProductHuntBadge } from '$lib/data';

	let {
		badge,
		size = 'sm',
		class: className = ''
	}: { badge: ProductHuntBadge; size?: 'sm' | 'lg'; class?: string } = $props();

	const sizes = {
		sm: { width: 180, height: 39, imageClass: 'rounded' },
		lg: { width: 250, height: 54, imageClass: 'h-[38px] w-auto' }
	};
</script>

<a href={badge.url} target="_blank" rel="noopener noreferrer" class={className}>
	<img
		src={badge.imageUrl}
		alt={badge.alt}
		width={sizes[size].width}
		height={sizes[size].height}
		class={sizes[size].imageClass}
	/>
</a>
