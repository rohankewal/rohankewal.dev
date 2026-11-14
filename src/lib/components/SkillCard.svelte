<script lang="ts">
	import type { SkillGroup } from '$lib/data';
	import Icon from '$lib/components/Icon.svelte';

	let { group }: { group: SkillGroup } = $props();
</script>

<div class="card card-interactive flex h-full flex-col p-7">
	<div
		class="flex size-9 items-center justify-center rounded-field border border-line bg-bg-subtle text-ink"
	>
		<Icon path={group.icon} />
	</div>

	<h3 class="mt-5 text-[16.5px] font-medium tracking-heading text-ink">{group.title}</h3>
	<p class="mt-2.5 text-[14.5px] leading-[1.65] text-muted">{group.desc}</p>

	<!-- `mt-auto` so the tag rows line up across a row of cards whose copy runs to
	     different lengths. -->
	<div class="mt-auto flex flex-wrap gap-1.5 pt-6">
		{#each group.tags as tag (tag)}
			<span
				class="rounded-full border border-line bg-bg-subtle px-2.5 py-1 text-[12.5px] text-muted"
			>
				{tag}
			</span>
		{/each}
	</div>
</div>
