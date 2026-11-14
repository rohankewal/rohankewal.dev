<script lang="ts">
	import type { OpenSourceProject } from '$lib/data';

	let { project }: { project: OpenSourceProject } = $props();
</script>

<a
	href={project.url}
	target="_blank"
	rel="noreferrer"
	class="card card-interactive group flex h-full flex-col overflow-hidden"
>
	<div class="border-b border-line bg-bg-subtle p-5">
		<img
			src={project.image}
			alt={project.imageAlt}
			loading="lazy"
			class="w-full rounded-[6px] border border-line"
		/>
	</div>

	<div class="flex flex-1 flex-col p-6">
		<div class="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
			<h3 class="font-mono text-[14px] break-all text-ink">{project.name}</h3>
			<span class="flex shrink-0 items-center gap-1.5 text-[12.5px] text-faint">
				<span aria-hidden="true" class="size-[7px] rounded-full bg-line-strong"></span>
				{project.language}
			</span>
		</div>

		<p class="mt-3 flex-1 text-[14.5px] leading-[1.65] text-muted">{project.summary}</p>

		<span
			class="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-ink transition-colors duration-150 group-hover:text-accent"
		>
			View on GitHub
			<span
				aria-hidden="true"
				class="transition-transform duration-200 group-hover:translate-x-0.5"
			>
				↗
			</span>
		</span>
	</div>
</a>
