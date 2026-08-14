<script lang="ts">
	let { label, value, href }: { label: string; value: string; href: string } = $props();
</script>

<a
	{href}
	target="_blank"
	rel="noreferrer"
	class="flex flex-col gap-2 rounded-2xl border border-white/10 p-[22px] text-ink! transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-accent/55"
>
	<span class="text-[13px] tracking-[0.06em] text-faint uppercase">{label}</span>
	<span class="text-[17px] font-medium">{value} ↗</span>
</a>
