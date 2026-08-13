<script lang="ts">
	import type { OpenSourceProject } from '$lib/data';

	let { project }: { project: OpenSourceProject } = $props();
</script>

<a
	href={project.url}
	target="_blank"
	rel="noreferrer"
	class="group flex flex-col overflow-hidden rounded-[18px] border border-white/10 bg-card transition-colors hover:border-white/25"
>
	<div class="flex items-center border-b border-white/8 bg-bg px-4 py-5">
		<img
			src={project.image}
			alt={`${project.name} terminal tab bar showing Nerd Font icons`}
			class="w-full rounded-md"
		/>
	</div>
	<div class="flex flex-1 flex-col gap-3 p-6">
		<div class="flex flex-wrap items-center justify-between gap-3">
			<h3 class="font-mono text-[15px] break-all text-ink">{project.name}</h3>
			<div class="flex shrink-0 items-center gap-1.5 text-[13px] text-faint">
				<span class="size-2 rounded-full bg-accent"></span>
				{project.language}
			</div>
		</div>
		<p class="flex-1 text-[15px] leading-[1.65] text-soft">{project.summary}</p>
		<span class="text-[15px] text-accent">View on GitHub ↗</span>
	</div>
</a>
