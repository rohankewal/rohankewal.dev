<script lang="ts">
	// The quiet text link used for "see all of these" and "read this" affordances.
	// Underlines on hover rather than permanently, so a grid of cards that each
	// end in one does not read as a wall of underlines.
	let {
		href,
		label,
		external = false,
		class: className = ''
	}: { href: string; label: string; external?: boolean; class?: string } = $props();
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noreferrer' : undefined}
	class="group inline-flex items-center gap-1.5 text-[14px] font-medium text-ink transition-colors duration-150 hover:text-accent {className}"
>
	<span class="link-underline">{label}</span>
	<span aria-hidden="true" class="transition-transform duration-200 group-hover:translate-x-0.5">
		{external ? '↗' : '→'}
	</span>
</a>
