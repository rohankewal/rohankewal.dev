<script lang="ts">
	import { checkoutUrl, type WallpaperPack } from '$lib/data';
	import Button from '$lib/components/Button.svelte';

	// A pack from the Paired Light store. Two actions rather than one, because
	// the free download is the point of the free download — so this is a card
	// with real buttons in it, not a card wrapped in a single link.
	let { pack }: { pack: WallpaperPack } = $props();
</script>

<div class="card card-interactive group flex h-full flex-col overflow-hidden">
	<!-- Every cover in assets/wallpapers is padded to 16:10 so `object-cover`
	     never crops the pack name off the bottom of one. Keep new covers to
	     that ratio rather than changing this. -->
	<div class="aspect-[16/10] overflow-hidden border-b border-line bg-bg-subtle">
		<img
			src={pack.image}
			alt={pack.imageAlt}
			loading="lazy"
			class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
		/>
	</div>

	<div class="flex flex-1 flex-col p-7">
		<div class="flex items-start justify-between gap-4">
			<span class="label">{pack.tag}</span>
			<span
				class="shrink-0 rounded-full border border-line bg-bg-subtle px-2.5 py-1 font-mono text-[12.5px] font-medium text-ink"
			>
				{pack.price}
			</span>
		</div>

		<h3 class="mt-3 text-[18px] font-medium tracking-heading text-ink">{pack.name}</h3>
		<p class="mt-2.5 text-[14.5px] leading-[1.65] text-muted">{pack.summary}</p>

		<ul class="mt-5 flex flex-wrap gap-1.5">
			{#each pack.specs as spec (spec)}
				<li class="rounded-full border border-line bg-bg px-2.5 py-1 text-[12.5px] text-body">
					{spec}
				</li>
			{/each}
		</ul>

		<div class="mt-auto flex flex-wrap items-center gap-x-5 gap-y-3 pt-7">
			<Button
				href={checkoutUrl(pack.url)}
				label="Get the pack, {pack.price}"
				size="sm"
				external
				arrow
			/>
			<a
				href={checkoutUrl(pack.freebie.url)}
				target="_blank"
				rel="noreferrer"
				class="text-[13.5px] text-muted transition-colors duration-150 hover:text-ink"
			>
				<span class="link-underline">Try it free</span>
				<span aria-hidden="true" class="text-faint">↗</span>
			</a>
		</div>
	</div>
</div>
