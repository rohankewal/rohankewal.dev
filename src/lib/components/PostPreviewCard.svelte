<script lang="ts">
	import { formatDate, type PostSummary } from '$lib/blog';

	// Compact post card used in the "Recent notes" grid on the home page. The blog
	// index gets the full-width rows in PostCard; this one is the boxed version,
	// showing the opening sentence and a little of what follows it.
	let { post }: { post: PostSummary } = $props();
</script>

<a
	href="/blog/{post.slug}"
	class="group flex h-full flex-col gap-3.5 rounded-[20px] border border-white/10 bg-card p-8 transition-colors duration-250 hover:border-accent/55"
>
	<div class="flex flex-wrap items-center gap-3 text-[13px] tracking-[0.08em] uppercase">
		<time datetime={post.date} class="text-accent">{formatDate(post.date)}</time>
		<span class="text-faint">{post.readingMinutes} min read</span>
	</div>

	<h3
		class="font-serif text-[30px] leading-[1.2] font-normal text-ink transition-colors duration-250 group-hover:text-accent"
	>
		{post.title}
	</h3>

	<p class="text-[16px] leading-[1.6] text-soft">{post.excerpt}</p>

	{#if post.preview}
		<p class="text-[15px] leading-[1.6] text-faint">{post.preview}</p>
	{/if}

	<span class="mt-auto pt-1 text-sm text-ink">Read the post →</span>
</a>
