<script lang="ts">
	import type { Service } from '$lib/data';
	import Icon from '$lib/components/Icon.svelte';

	let { service }: { service: Service } = $props();
</script>

<div class="card card-interactive p-7">
	<div
		class="flex size-9 items-center justify-center rounded-field border border-line bg-bg-subtle text-ink"
	>
		<Icon path={service.icon} />
	</div>

	<h3 class="mt-5 text-[16.5px] font-medium tracking-heading text-ink">{service.title}</h3>
	<p class="mt-2.5 text-[14.5px] leading-[1.65] text-muted">{service.desc}</p>
</div>
