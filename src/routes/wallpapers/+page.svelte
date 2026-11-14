<script lang="ts">
	import { checkoutUrl, storeNotes, wallpaperPacks } from '$lib/data';
	import { storeName, storeTagline, storeUrl } from '$lib/site';
	import CtaBand from '$lib/components/CtaBand.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import Section from '$lib/components/Section.svelte';
	import SectionHeading from '$lib/components/SectionHeading.svelte';
	import Seo from '$lib/components/Seo.svelte';
	import WallpaperCard from '$lib/components/WallpaperCard.svelte';
</script>

<Seo
	title="Paired Light Wallpapers | Rohan Kewalramani"
	description="Paired Light is my wallpaper store. Glass Flux is 24 dark abstract designs for phone and 5K desktop. Notebook Fold is 8 clothbound notebook covers for folding phones. Both packs have a free download."
	path="/wallpapers"
/>

<Section class="animate-fade-up pt-[clamp(48px,7vh,80px)] pb-[clamp(64px,8vw,96px)]">
	<PageHeader eyebrow={storeName} title="Wallpapers" lead={storeTagline} class="mb-12" />

	<div class="grid gap-4 sm:grid-cols-2">
		{#each wallpaperPacks as pack (pack.slug)}
			<WallpaperCard {pack} />
		{/each}
	</div>
</Section>

<section class="band">
	<Section element="div" class="py-[clamp(64px,8vw,104px)]">
		<SectionHeading
			eyebrow="How it works"
			title="What you actually get"
			lead="This is a side project rather than client work, so it is worth being plain about what buying one involves and what ends up on your phone."
			class="mb-11"
		/>

		<div class="grid gap-4 sm:grid-cols-3">
			{#each storeNotes as note (note.title)}
				<div class="card p-7">
					<div
						class="flex size-9 items-center justify-center rounded-field border border-line bg-bg text-ink"
					>
						<Icon path={note.icon} />
					</div>

					<h3 class="mt-5 text-[16.5px] font-medium tracking-heading text-ink">{note.title}</h3>
					<p class="mt-2.5 text-[14.5px] leading-[1.65] text-muted">{note.desc}</p>
				</div>
			{/each}
		</div>
	</Section>
</section>

<Section class="py-[clamp(64px,8vw,104px)]">
	<SectionHeading
		eyebrow="Free downloads"
		title="Start with the free ones"
		lead="Each pack has a free version on the store, so you can put one on your own phone before paying for anything."
		class="mb-11"
	/>

	<div class="grid gap-4 sm:grid-cols-2">
		{#each wallpaperPacks as pack (pack.slug)}
			<a
				href={checkoutUrl(pack.freebie.url)}
				target="_blank"
				rel="noreferrer"
				class="card card-interactive group flex h-full flex-col overflow-hidden"
			>
				<div class="aspect-[16/10] overflow-hidden border-b border-line bg-bg-subtle">
					<img
						src={pack.freebie.image}
						alt={pack.freebie.imageAlt}
						loading="lazy"
						class="size-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
					/>
				</div>

				<div class="flex flex-1 flex-col p-6">
					<div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
						<h3 class="text-[16.5px] font-medium tracking-heading text-ink">
							{pack.freebie.name}
						</h3>
						<span
							class="shrink-0 rounded-full border border-line bg-bg-subtle px-2.5 py-1 font-mono text-[12.5px] font-medium text-ink"
						>
							$0
						</span>
					</div>

					<p class="mt-2.5 flex-1 text-[14.5px] leading-[1.65] text-muted">
						{pack.freebie.blurb}
					</p>

					<span
						class="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink transition-colors duration-150 group-hover:text-accent"
					>
						Download it
						<span
							aria-hidden="true"
							class="transition-transform duration-200 group-hover:translate-x-0.5"
						>
							↗
						</span>
					</span>
				</div>
			</a>
		{/each}
	</div>
</Section>

<Section class="pb-[clamp(72px,9vw,120px)]">
	<CtaBand
		heading="See everything on the store"
		body="Both packs, both free downloads, and anything I add next all live on Gumroad."
		href={storeUrl}
		buttonLabel="Visit {storeName}"
		external
		large
	/>
</Section>
