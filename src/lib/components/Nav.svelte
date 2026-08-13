<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from '$lib/nav';

	let menuOpen = $state(false);

	function isActive(href: string) {
		return page.url.pathname === href;
	}
</script>

<nav
	class="fixed top-0 right-0 left-0 z-50 flex items-center justify-between border-b border-white/6 bg-[rgba(36,39,58,0.55)] px-[clamp(20px,5vw,64px)] py-[22px] backdrop-blur-[10px]"
>
	<a
		href="/"
		onclick={() => (menuOpen = false)}
		class="font-serif text-[26px] text-ink! italic"
	>
		Rohan<span class="text-accent">.</span>
	</a>

	<button
		aria-label="Toggle menu"
		onclick={() => (menuOpen = !menuOpen)}
		class="flex h-10 w-10 items-center justify-center rounded-[10px] border border-white/15 text-ink min-[721px]:hidden"
	>
		<span class="text-lg">{menuOpen ? '✕' : '☰'}</span>
	</button>

	<div class="hidden items-center gap-[clamp(14px,3vw,36px)] min-[721px]:flex">
		{#each navItems as item (item.href)}
			<a
				href={item.href}
				class="border-b-2 pb-1 text-[15px] font-medium whitespace-nowrap {isActive(item.href)
					? 'border-accent text-accent!'
					: 'border-transparent text-ink!'}"
			>
				{item.label}
			</a>
		{/each}
	</div>
</nav>

{#if menuOpen}
	<div
		class="fixed inset-0 z-49 flex flex-col items-start justify-center gap-7 bg-[rgba(36,39,58,0.98)] px-[clamp(24px,8vw,64px)] py-8 backdrop-blur-[10px] min-[721px]:hidden"
	>
		{#each navItems as item (item.href)}
			<a
				href={item.href}
				onclick={() => (menuOpen = false)}
				class="font-serif text-[42px] italic {isActive(item.href) ? 'text-accent!' : 'text-ink!'}"
			>
				{item.label}
			</a>
		{/each}
	</div>
{/if}
