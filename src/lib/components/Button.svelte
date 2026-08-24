<script lang="ts">
	// Renders an <a> when given an href and a real <button> when not, so a form
	// submit gets the same treatment as every other call to action on the site.
	let {
		href,
		label,
		variant = 'primary',
		size = 'lg',
		external = false,
		type = 'button',
		disabled = false,
		class: className = ''
	}: {
		href?: string;
		label: string;
		variant?: 'primary' | 'secondary' | 'onFill';
		size?: 'sm' | 'md' | 'lg';
		external?: boolean;
		type?: 'button' | 'submit';
		disabled?: boolean;
		class?: string;
	} = $props();

	const variants = {
		primary: 'bg-accent font-semibold text-bg!',
		secondary: 'border border-white/18 font-medium text-ink!',
		// For use on top of a saturated filled surface, where `primary` would vanish.
		onFill: 'bg-bg font-semibold text-ink!'
	};

	const sizes = {
		sm: 'px-[22px] py-3 text-sm',
		md: 'px-7 py-3.5 text-[15px]',
		lg: 'px-[30px] py-4 text-[15px]'
	};

	let classes = $derived(
		`w-fit rounded-full whitespace-nowrap transition-transform duration-200 hover:scale-105 ${variants[variant]} ${sizes[size]} ${className}`
	);
</script>

{#if href}
	<a
		{href}
		target={external ? '_blank' : undefined}
		rel={external ? 'noreferrer' : undefined}
		class={classes}
	>
		{label}
	</a>
{:else}
	<button
		{type}
		{disabled}
		class="{classes} disabled:pointer-events-none disabled:opacity-55"
	>
		{label}
	</button>
{/if}
