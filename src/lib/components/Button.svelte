<script lang="ts">
	let {
		href,
		label,
		variant = 'primary',
		size = 'lg',
		external = false,
		class: className = ''
	}: {
		href: string;
		label: string;
		variant?: 'primary' | 'secondary';
		size?: 'sm' | 'md' | 'lg';
		external?: boolean;
		class?: string;
	} = $props();

	const variants = {
		primary: 'bg-accent font-semibold text-bg!',
		secondary: 'border border-white/18 font-medium text-ink!'
	};

	const sizes = {
		sm: 'px-[22px] py-3 text-sm',
		md: 'px-7 py-3.5 text-[15px]',
		lg: 'px-[30px] py-4 text-[15px]'
	};
</script>

<a
	{href}
	target={external ? '_blank' : undefined}
	rel={external ? 'noreferrer' : undefined}
	class="w-fit rounded-full whitespace-nowrap transition-transform duration-200 hover:scale-105 {variants[
		variant
	]} {sizes[size]} {className}"
>
	{label}
</a>
