<script lang="ts">
	import { page } from '$app/state';
	import { navItems } from '$lib/nav';
	import ThemeToggle from '$lib/components/ThemeToggle.svelte';

	let menuOpen = $state(false);

	// Prefix match on everything but the home link, so a future child route
	// (`/projects/some-case-study`) still lights up its parent.
	function isActive(href: string) {
		return href === '/' ? page.url.pathname === '/' : page.url.pathname.startsWith(href);
	}
</script>

<svelte:window
	onkeydown={(event) => {
		if (event.key === 'Escape') menuOpen = false;
	}}
/>

<header
	class="fixed inset-x-0 top-0 z-50 border-b border-line bg-bg/85 backdrop-blur-xl backdrop-saturate-150"
>
	<nav
		aria-label="Main"
		class="mx-auto flex h-15 max-w-[1120px] items-center justify-between gap-4 px-[clamp(20px,5vw,56px)]"
	>
		<a
			href="/"
			onclick={() => (menuOpen = false)}
			aria-label="Rohan Kewalramani — home"
			class="group flex items-center gap-2.5"
		>
			<span
				aria-hidden="true"
				class="flex size-6.5 items-center justify-center rounded-[7px] bg-ink font-mono text-[12.5px] font-medium text-bg"
			>
				R
			</span>
			<span class="text-[14.5px] font-medium tracking-[-0.01em] text-ink">Rohan Kewalramani</span>
		</a>

		<div class="flex items-center gap-1">
			<div class="hidden items-center gap-0.5 md:flex">
				{#each navItems as item (item.href)}
					<a
						href={item.href}
						aria-current={isActive(item.href) ? 'page' : undefined}
						class="rounded-field px-3 py-1.5 text-[14px] transition-colors duration-150 {isActive(
							item.href
						)
							? 'bg-bg-subtle font-medium text-ink'
							: 'text-muted hover:text-ink'}"
					>
						{item.label}
					</a>
				{/each}
			</div>

			<div aria-hidden="true" class="mx-2 hidden h-5 w-px bg-line md:block"></div>

			<ThemeToggle />

			<a
				href="/contact"
				class="ml-1 hidden rounded-field bg-ink px-3.5 py-2 text-[13.5px] font-medium text-bg transition-opacity duration-150 hover:opacity-85 md:block"
			>
				Get in touch
			</a>

			<button
				type="button"
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
				onclick={() => (menuOpen = !menuOpen)}
				class="flex size-9 items-center justify-center rounded-field text-ink transition-colors duration-150 hover:bg-bg-subtle md:hidden"
			>
				<svg
					class="size-[18px]"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					aria-hidden="true"
				>
					{#if menuOpen}
						<path d="M6 6l12 12M18 6 6 18" />
					{:else}
						<path d="M4 8h16M4 16h16" />
					{/if}
				</svg>
			</button>
		</div>
	</nav>

	{#if menuOpen}
		<div class="border-t border-line bg-bg px-[clamp(20px,5vw,56px)] pt-2 pb-5 md:hidden">
			{#each navItems as item (item.href)}
				<a
					href={item.href}
					onclick={() => (menuOpen = false)}
					aria-current={isActive(item.href) ? 'page' : undefined}
					class="block border-b border-line py-3 text-[15px] last:border-b-0 {isActive(item.href)
						? 'font-medium text-ink'
						: 'text-muted'}"
				>
					{item.label}
				</a>
			{/each}

			<a
				href="/contact"
				onclick={() => (menuOpen = false)}
				class="mt-4 block rounded-field bg-ink py-2.5 text-center text-[14px] font-medium text-bg"
			>
				Get in touch
			</a>
		</div>
	{/if}
</header>
