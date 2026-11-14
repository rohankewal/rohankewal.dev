<script lang="ts">
	import { toggleTheme } from '$lib/theme';

	// Both icons are always in the DOM and CSS hides one, so the button renders
	// correctly on the prerendered HTML without knowing the scheme. The label
	// stays scheme-neutral for the same reason.
	let { class: className = '' }: { class?: string } = $props();
</script>

<button
	type="button"
	onclick={toggleTheme}
	aria-label="Switch between light and dark theme"
	title="Switch theme"
	class="flex size-9 items-center justify-center rounded-field text-muted transition-colors duration-150 hover:bg-bg-subtle hover:text-ink {className}"
>
	<!-- Shown in light mode: tapping it goes to dark. -->
	<svg
		class="size-[17px] dark:hidden"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.7"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.6 6.6 0 0 0 9.8 9.8Z" />
	</svg>

	<svg
		class="hidden size-[17px] dark:block"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		stroke-width="1.7"
		stroke-linecap="round"
		stroke-linejoin="round"
		aria-hidden="true"
	>
		<circle cx="12" cy="12" r="4" />
		<path
			d="M12 2v2.5M12 19.5V22M4.2 4.2l1.8 1.8M18 18l1.8 1.8M2 12h2.5M19.5 12H22M4.2 19.8 6 18M18 6l1.8-1.8"
		/>
	</svg>
</button>
