<script lang="ts">
	let { label, value, href }: { label: string; value: string; href: string } = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noreferrer"
	class="card card-interactive group flex items-center justify-between gap-4 px-5 py-4"
>
	<span class="min-w-0">
		<span class="label block">{label}</span>
		<span class="mt-1.5 block truncate text-[14.5px] font-medium text-ink">{value}</span>
	</span>

	<span
		aria-hidden="true"
		class="shrink-0 text-[14px] text-faint transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-ink"
	>
		↗
	</span>
</a>
