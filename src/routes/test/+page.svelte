<script lang="ts">
	import { useQuery, useConvexClient } from 'convex-svelte';
	import { api } from '../../convex/_generated/api.js';

	const messages = useQuery(api.messages.list, {});
	const client = useConvexClient();

	let text = $state('');
	let author = $state('');
	let sending = $state(false);

	async function handleSubmit(e: Event) {
		e.preventDefault();
		if (!text.trim() || !author.trim()) return;
		sending = true;
		await client.mutation(api.messages.send, { text, author });
		text = '';
		sending = false;
	}
</script>

<main class="mx-auto max-w-lg p-8">
	<h1 class="mb-6 text-2xl font-bold">Test Convex parostatkiem w piekny rejs</h1>

	<form onsubmit={handleSubmit} class="mb-8 flex flex-col gap-3">
		<input
			bind:value={author}
			placeholder="Twoje imię"
			class="rounded border border-border bg-background px-3 py-2 text-foreground"
		/>
		<input
			bind:value={text}
			placeholder="Wiadomość"
			class="rounded border border-border bg-background px-3 py-2 text-foreground"
		/>
		<button
			type="submit"
			disabled={sending}
			class="rounded bg-primary px-4 py-2 text-primary-foreground disabled:opacity-50"
		>
			{sending ? 'Wysyłam...' : 'Wyślij'}
		</button>
	</form>

	{#if messages.isLoading}
		<p class="text-muted-foreground">Ładowanie...</p>
	{:else if messages.error}
		<p class="text-destructive">Błąd: {messages.error.toString()}</p>
	{:else}
		<ul class="flex flex-col gap-2">
			{#each messages.data as msg}
				<li class="rounded border border-border p-3">
					<span class="font-semibold">{msg.author}:</span> {msg.text}
				</li>
			{/each}
		</ul>
	{/if}
</main>
