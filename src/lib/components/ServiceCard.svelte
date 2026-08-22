<script lang="ts">
	import type { Service } from '$lib/data';

	let { service }: { service: Service } = $props();
</script>

<div
	class="rounded-[20px] border border-white/10 bg-card p-8 transition-[transform,border-color] duration-250 hover:-translate-y-1 hover:border-accent/55"
>
	<div
		class="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/18 font-serif text-[22px] text-accent italic"
	>
		{service.mark}
	</div>
	<h3 class="mb-2.5 font-serif text-2xl font-normal text-ink">{service.title}</h3>
	<p class="text-[15px] leading-[1.6] text-muted">{service.desc}</p>
</div>
