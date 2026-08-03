<script lang="ts">
	import type { SkillGroup } from '$lib/data';

	let { group }: { group: SkillGroup } = $props();
</script>

<div
	class="rounded-[20px] border border-white/10 bg-card p-8 transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-accent/35"
>
	<div
		class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/12 font-serif text-[22px] text-accent italic"
	>
		{group.mark}
	</div>
	<h3 class="mb-2.5 font-serif text-2xl font-normal text-ink">{group.title}</h3>
	<p class="mb-4.5 text-[15px] leading-[1.6] text-muted">{group.desc}</p>
	<div class="flex flex-wrap gap-2">
		{#each group.tags as tag (tag)}
			<span class="rounded-full border border-white/8 bg-white/5 px-3 py-1.5 text-[13px] text-[#c9c9c4]">
				{tag}
			</span>
		{/each}
	</div>
</div>
