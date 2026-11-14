<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { replyTime } from '$lib/site';

	// The closing panel on most pages. A bordered surface rather than a saturated
	// block, so it reads as the end of the page instead of competing with it.
	//
	// Defaults point at the contact page, which is where all but one of these
	// send you. The wallpapers page overrides them to send you to the store.
	let {
		heading,
		body = replyTime,
		href = '/contact',
		buttonLabel = "Let's talk",
		external = false,
		large = false
	}: {
		heading: string;
		body?: string;
		href?: string;
		buttonLabel?: string;
		external?: boolean;
		large?: boolean;
	} = $props();
</script>

<div
	class="flex flex-wrap items-center justify-between gap-x-10 gap-y-6 rounded-card border border-line bg-bg-subtle {large
		? 'p-[clamp(28px,5vw,56px)]'
		: 'p-[clamp(26px,4vw,44px)]'}"
>
	<div class="max-w-[520px]">
		<h2
			class="font-medium tracking-display text-ink {large
				? 'text-[clamp(26px,3.4vw,36px)]'
				: 'text-[clamp(22px,2.8vw,28px)]'} leading-[1.15]"
		>
			{heading}
		</h2>
		<p class="mt-3 text-[15px] leading-[1.6] text-muted">{body}</p>
	</div>

	<Button {href} label={buttonLabel} size={large ? 'lg' : 'md'} {external} arrow />
</div>
