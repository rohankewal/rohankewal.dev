<script lang="ts">
	import Button from '$lib/components/Button.svelte';
	import { email, replyTime } from '$lib/site';

	// Posts to the Worker route in worker/index.ts. Submitting with fetch keeps
	// people on the page, but the plain method="post" action is left intact so
	// the form still works if the script never runs.
	const budgets = [
		'Not sure yet',
		'Under $800',
		'$800 to $1,500',
		'$1,500 to $5,000',
		'Over $5,000'
	];

	const timelines = [
		'As soon as possible',
		'In the next month',
		'In the next few months',
		'Just exploring for now'
	];

	let status = $state<'idle' | 'sending' | 'sent' | 'error'>('idle');
	let error = $state('');

	const field =
		'w-full rounded-xl border border-white/10 bg-card px-4 py-3 text-[15px] text-ink placeholder:text-faint focus:border-accent/60 focus:outline-none';
	const labelText = 'mb-2 block text-[13px] tracking-[0.06em] text-faint uppercase';

	async function submit(event: SubmitEvent) {
		event.preventDefault();

		const form = event.currentTarget as HTMLFormElement;
		status = 'sending';
		error = '';

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: { accept: 'application/json' },
				body: new FormData(form)
			});

			const result = (await response.json().catch(() => ({}))) as { error?: string };

			// A 404 here means the Worker is not in front of the site, which is the
			// case under `vite dev`. Anything else without a message gets the status
			// attached, so a failure is diagnosable from a screenshot.
			if (!response.ok) {
				throw new Error(
					result.error ??
						`That did not send (${response.status}). Email me directly at ${email}.`
				);
			}

			form.reset();
			status = 'sent';
		} catch (thrown) {
			status = 'error';
			error =
				thrown instanceof Error && thrown.message
					? thrown.message
					: `That did not send. Email me directly at ${email}.`;
		}
	}
</script>

{#if status === 'sent'}
	<div class="rounded-[20px] border border-green/30 bg-green/8 p-8">
		<p class="font-serif text-[26px] text-ink">Thanks, that landed in my inbox.</p>
		<p class="mt-3 text-[16px] leading-[1.6] text-soft">{replyTime}</p>
		<button
			type="button"
			class="mt-5 border-b border-white/20 text-[15px] text-muted"
			onclick={() => (status = 'idle')}
		>
			Send another
		</button>
	</div>
{:else}
	<form method="POST" action="/api/contact" onsubmit={submit} class="flex flex-col gap-5">
		<div class="grid gap-5 sm:grid-cols-2">
			<div>
				<label for="name" class={labelText}>Your name</label>
				<input id="name" name="name" required maxlength="120" class={field} />
			</div>

			<div>
				<label for="email" class={labelText}>Email</label>
				<input
					id="email"
					name="email"
					type="email"
					required
					maxlength="200"
					class={field}
				/>
			</div>
		</div>

		<div>
			<label for="project" class={labelText}>What are you building?</label>
			<textarea
				id="project"
				name="project"
				required
				rows="5"
				maxlength="4000"
				placeholder="A few sentences is plenty. What the business does, what you need, and anything that has to work on day one."
				class="{field} resize-y leading-[1.6]"
			></textarea>
		</div>

		<div class="grid gap-5 sm:grid-cols-2">
			<div>
				<label for="budget" class={labelText}>Budget range</label>
				<select id="budget" name="budget" class={field}>
					{#each budgets as budget (budget)}
						<option class="bg-card" value={budget}>{budget}</option>
					{/each}
				</select>
			</div>

			<div>
				<label for="timeline" class={labelText}>Timeline</label>
				<select id="timeline" name="timeline" class={field}>
					{#each timelines as timeline (timeline)}
						<option class="bg-card" value={timeline}>{timeline}</option>
					{/each}
				</select>
			</div>
		</div>

		<!-- Hidden from people, irresistible to bots. Anything that fills it in is dropped. -->
		<div class="hidden" aria-hidden="true">
			<label for="company">Company</label>
			<input id="company" name="company" tabindex="-1" autocomplete="off" />
		</div>

		{#if status === 'error'}
			<p role="alert" class="text-[15px] leading-[1.6] text-accent">{error}</p>
		{/if}

		<div class="mt-1 flex flex-wrap items-center gap-5">
			<Button
				type="submit"
				label={status === 'sending' ? 'Sending…' : 'Send it →'}
				disabled={status === 'sending'}
				size="md"
			/>
			<span class="text-sm text-faint">{replyTime}</span>
		</div>
	</form>
{/if}
