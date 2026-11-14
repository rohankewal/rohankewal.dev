<script lang="ts">
	// Renders an <a> when given an href and a real <button> when not, so a form
	// submit gets the same treatment as every other call to action on the site.
	let {
		href,
		label,
		variant = 'primary',
		size = 'md',
		arrow = false,
		external = false,
		type = 'button',
		disabled = false,
		class: className = ''
	}: {
		href?: string;
		label: string;
		variant?: 'primary' | 'secondary' | 'ghost';
		size?: 'sm' | 'md' | 'lg';
		/** Adds a trailing arrow that slides on hover. */
		arrow?: boolean;
		external?: boolean;
		type?: 'button' | 'submit';
		disabled?: boolean;
		class?: string;
	} = $props();

	// `primary` is the ink/paper inversion, so it reads as the strongest thing on
	// the page in either scheme without needing a brand colour.
	const variants = {
		primary: 'bg-ink text-bg hover:opacity-85',
		secondary: 'border border-line-strong text-ink hover:bg-bg-subtle',
		ghost: 'text-muted hover:text-ink hover:bg-bg-subtle'
	};

	const sizes = {
		sm: 'px-3.5 py-2 text-[13.5px]',
		md: 'px-4.5 py-2.5 text-[14px]',
		lg: 'px-5.5 py-3 text-[14.5px]'
	};

	let classes = $derived(
		`group inline-flex w-fit items-center gap-1.5 rounded-field font-medium whitespace-nowrap transition-[opacity,background-color,border-color] duration-150 ${variants[variant]} ${sizes[size]} ${className}`
	);
</script>

{#snippet content()}
	{label}
	{#if arrow}
		<span
			aria-hidden="true"
			class="transition-transform duration-200 group-hover:translate-x-0.5"
		>
			{external ? '↗' : '→'}
		</span>
	{/if}
{/snippet}

{#if href}
	<a
		{href}
		target={external ? '_blank' : undefined}
		rel={external ? 'noreferrer' : undefined}
		class={classes}
	>
		{@render content()}
	</a>
{:else}
	<button {type} {disabled} class="{classes} disabled:pointer-events-none disabled:opacity-50">
		{@render content()}
	</button>
{/if}
