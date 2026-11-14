<script lang="ts">
	import { availability, email, location, socialLinks, storeName, storeUrl } from '$lib/site';
</script>

<footer class="mt-auto border-t border-line">
	<div class="mx-auto max-w-[1120px] px-[clamp(20px,5vw,56px)] py-12">
		<div class="flex flex-col gap-10 sm:flex-row sm:justify-between">
			<div class="max-w-[300px]">
				<div class="flex items-center gap-2.5">
					<span
						aria-hidden="true"
						class="flex size-6.5 items-center justify-center rounded-[7px] bg-ink font-mono text-[12.5px] font-medium text-bg"
					>
						R
					</span>
					<span class="text-[14.5px] font-medium tracking-[-0.01em] text-ink">
						Rohan Kewalramani
					</span>
				</div>

				<p class="mt-3 text-[13.5px] leading-[1.6] text-muted">
					Freelance web developer building sites and full-stack products for founders and small
					teams.
				</p>

				<a
					href="mailto:{email}"
					class="link-underline mt-4 inline-block text-[13.5px] text-ink hover:text-accent"
				>
					{email}
				</a>
			</div>

			<nav aria-label="Elsewhere" class="flex flex-col items-start gap-2.5">
				<span class="label mb-0.5">Elsewhere</span>
				{#each socialLinks as link (link.url)}
					<a
						href={link.url}
						target="_blank"
						rel="noreferrer"
						class="text-[13.5px] text-muted transition-colors duration-150 hover:text-ink"
					>
						{link.label} <span aria-hidden="true" class="text-faint">↗</span>
					</a>
				{/each}

				<!-- Last in the list because it is the only one that is a shop
				     rather than a profile. -->
				<a
					href={storeUrl}
					target="_blank"
					rel="noreferrer"
					class="text-[13.5px] text-muted transition-colors duration-150 hover:text-ink"
				>
					{storeName} <span aria-hidden="true" class="text-faint">↗</span>
				</a>
			</nav>
		</div>

		<div
			class="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-line pt-6 text-[12.5px] text-faint"
		>
			<span>© {new Date().getFullYear()} Rohan Kewalramani</span>
			<span class="flex items-center gap-1.5">
				<span aria-hidden="true" class="animate-pulse-dot size-1.5 rounded-full bg-success"></span>
				{availability}
			</span>
			<span>{location}</span>
		</div>
	</div>
</footer>
