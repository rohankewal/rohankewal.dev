<script lang="ts">
	import { availability, location, socialLinks } from '$lib/site';
</script>

<footer
	class="relative z-1 flex flex-wrap items-center justify-between gap-4 border-t border-white/8 px-[clamp(20px,5vw,64px)] py-8"
>
	<div class="flex flex-wrap items-center gap-4">
		<span class="text-sm text-faint">© {new Date().getFullYear()} Rohan Kewalramani</span>
		<span
			class="flex items-center gap-1.5 rounded-full border border-green/30 bg-green/12 px-3 py-1 text-xs font-bold tracking-wider text-green uppercase"
		>
			<span class="animate-pulse-dot size-1.5 rounded-full bg-green"></span>
			{availability}
		</span>
		<span class="text-[13px] text-faint">📍 {location}</span>
	</div>
	<div class="flex gap-6 text-sm">
		{#each socialLinks as link (link.url)}
			<a href={link.url} target="_blank" rel="noreferrer" class="text-muted!">
				{link.shortLabel}
			</a>
		{/each}
	</div>
</footer>
