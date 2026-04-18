<script lang="ts">
	let input = $state('');
	let output = $state('');
	let loading = $state(false);
	let error = $state('');

	async function convert() {
		if (!input.trim()) return;
		loading = true;
		error = '';
		output = '';

		try {
			const res = await fetch('https://api.openai.com/v1/chat/completions', {
				method: 'POST',
				headers: {
					Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					model: 'gpt-4o-mini',
					messages: [
						{
							role: 'system',
							content: `Jesteś ekspertem od komunikacji z seniorami.
Twoim zadaniem jest przepisanie wiadomości tak, by była zrozumiała, ciepła i odpowiednia dla osoby starszej (60+).

Zasady:
- Używaj prostych, krótkich zdań
- Unikaj żargonu, skrótów i anglicyzmów
- Mów wprost, ale z troską i szacunkiem
- Zachowaj oryginalny sens i intencję
- Nie bądź protekcjonalny
- Jeśli temat jest trudny (choroba, decyzja, zmiana), użyj empatycznego tonu
- Odpowiadaj tylko przepisaną wiadomością, bez komentarza`
						},
						{
							role: 'user',
							content: input.trim()
						}
					],
					max_tokens: 500,
					temperature: 0.7
				})
			});

			if (!res.ok) throw new Error(`Błąd API: ${res.status}`);

			const data = await res.json();
			output = data.choices[0].message.content;
		} catch (e) {
			error = e instanceof Error ? e.message : 'Coś poszło nie tak. Spróbuj ponownie.';
		} finally {
			loading = false;
		}
	}

	function copy() {
		navigator.clipboard.writeText(output);
	}
</script>

<svelte:head>
	<title>Tłumacz dla seniora — Bliżej</title>
</svelte:head>

<div class="max-w-lg mx-auto px-6 py-10">
	<a
		href="/"
		class="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8"
	>
		← Wstecz
	</a>

	<div class="mb-8">
		<span class="text-xs uppercase tracking-widest text-muted-foreground font-medium">AI</span>
		<h1 class="text-2xl font-bold tracking-tight mt-1">Tłumacz dla seniora</h1>
		<p class="text-muted-foreground text-sm mt-1" id="konwerter-desc">
			Napisz co chcesz powiedzieć — AI przepisze to na język zrozumiały dla Twojego bliskiego.
		</p>
	</div>

	<div class="space-y-4">
		<div>
			<label for="konwerter-input" class="text-sm font-medium mb-2 block">
				Co chcesz powiedzieć?
			</label>
			<textarea
				id="konwerter-input"
				bind:value={input}
				aria-describedby="konwerter-desc"
				placeholder="np. Tato, martwię się że nie wychodzisz z domu i wydaje mi się że powinieneś porozmawiać z lekarzem o swoim samopoczuciu..."
				rows={5}
				class="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground
					focus:outline-none focus:ring-2 focus:ring-ring resize-none"
			></textarea>
		</div>

		<button
			onclick={convert}
			disabled={loading || !input.trim()}
			aria-busy={loading}
			class="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm
				hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed
				focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-offset-2"
		>
			{loading ? 'Tłumaczę...' : 'Przetłumacz dla seniora'}
		</button>

		{#if error}
			<p role="alert" class="text-sm text-destructive">{error}</p>
		{/if}

		{#if output}
			<div
				role="status"
				aria-live="polite"
				aria-label="Przetłumaczona wiadomość"
				class="mt-2 rounded-xl border border-border bg-secondary/40 p-5 space-y-3"
			>
				<div class="flex items-center justify-between">
					<p class="text-xs uppercase tracking-widest font-medium text-muted-foreground">
						Jak to powiedzieć seniorowi
					</p>
					<button
						onclick={copy}
						aria-label="Kopiuj przetłumaczoną wiadomość"
						class="text-xs text-muted-foreground hover:text-foreground transition-colors
							focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none rounded"
					>
						Kopiuj
					</button>
				</div>
				<p class="text-base leading-relaxed whitespace-pre-wrap">{output}</p>
			</div>
		{/if}
	</div>
</div>
