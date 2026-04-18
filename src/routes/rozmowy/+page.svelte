<script lang="ts">
	import { rozmowy } from '$lib/data/rozmowy';
	import { fade } from 'svelte/transition';

	let temat = $state('');
	let loading = $state(false);
	let error = $state('');

	type Wskazowka = {
		sytuacja: string;
		tak: string[];
		nie: string[];
	};

	let wynik = $state<Wskazowka | null>(null);

	async function generuj() {
		if (!temat.trim()) return;
		loading = true;
		error = '';
		wynik = null;

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
Użytkownik poda temat trudnej rozmowy z osobą starszą (60+).
Odpowiedz wyłącznie w formacie JSON (bez markdown, bez \`\`\`):
{
  "sytuacja": "krótki opis sytuacji/kontekstu (1 zdanie)",
  "tak": ["zdanie 1 jak dobrze powiedzieć", "zdanie 2", "zdanie 3"],
  "nie": ["zdanie 1 czego unikać", "zdanie 2", "zdanie 3"]
}
Wskazówki "tak" to konkretne przykłady zdań do powiedzenia, ciepłe i empatyczne.
Wskazówki "nie" to przykłady zdań których należy unikać i dlaczego są złe.
Każde zdanie w cudzysłowie jeśli to bezpośrednia wypowiedź.`
						},
						{
							role: 'user',
							content: temat.trim()
						}
					],
					max_tokens: 600,
					temperature: 0.7
				})
			});

			if (!res.ok) throw new Error(`Błąd API: ${res.status}`);
			const data = await res.json();
			wynik = JSON.parse(data.choices[0].message.content);
		} catch (e) {
			error = e instanceof Error ? e.message : 'Coś poszło nie tak. Spróbuj ponownie.';
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>Trudne rozmowy — Bliżej</title>
</svelte:head>

<div class="max-w-4xl mx-auto px-6 py-10">
	<a href="/" class="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8">
		← Wstecz
	</a>

	<div class="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
		<!-- Lewa kolumna: Trudne rozmowy -->
		<div>
			<span class="text-xs uppercase tracking-widest text-muted-foreground font-medium">Scenariusze</span>
		<h1 class="text-2xl font-bold tracking-tight mb-2 mt-1">Trudne rozmowy</h1>
			<p class="text-muted-foreground text-sm mb-8">Jak mówić — i jak nie mówić. Scenariusze krok po kroku.</p>

			<nav aria-label="Lista scenariuszy rozmów">
				<ul class="space-y-3">
					{#each rozmowy as rozmowa}
						<li>
							<a
								href="/rozmowy/{rozmowa.id}"
								class="block p-5 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
							>
								<div class="flex items-center justify-between gap-4">
									<div>
										<p class="font-semibold text-base group-hover:text-primary transition-colors">
											{rozmowa.tytul}
										</p>
										<p class="text-sm text-muted-foreground mt-1">{rozmowa.opis}</p>
									</div>
									<span aria-hidden="true" class="text-muted-foreground shrink-0">→</span>
								</div>
							</a>
						</li>
					{/each}
				</ul>
			</nav>
		</div>

		<!-- Prawa kolumna: Własny temat -->
		<div>
		<div class="mb-5">
			<span class="text-xs uppercase tracking-widest text-muted-foreground font-medium">AI</span>
			<h2 class="text-2xl font-bold mt-1">Własny temat rozmowy</h2>
			<p id="ai-desc" class="text-sm text-muted-foreground mt-1">
				Opisz sytuację — AI podpowie jak rozmawiać.
			</p>
		</div>

		<div class="space-y-3">
			<label for="temat-input" class="sr-only">Opisz temat trudnej rozmowy</label>
			<textarea
				id="temat-input"
				bind:value={temat}
				aria-describedby="ai-desc"
				placeholder="np. Chcę powiedzieć mamie, że martwię się jej pamięcią i że powinna iść do neurologa..."
				rows={3}
				class="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground
					placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
			></textarea>

			<button
				onclick={generuj}
				disabled={loading || !temat.trim()}
				aria-busy={loading}
				class="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm
					hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed
					focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-offset-2"
			>
				{loading ? 'Generuję wskazówki...' : 'Jak poprowadzić tę rozmowę?'}
			</button>

			{#if error}
				<p role="alert" class="text-sm text-destructive">{error}</p>
			{/if}

			{#if wynik}
				<div
					in:fade={{ duration: 200 }}
					role="status"
					aria-live="polite"
					class="rounded-xl border border-border bg-card p-5 space-y-5 mt-2"
				>
					<p class="text-sm font-medium">{wynik.sytuacja}</p>

					<div class="space-y-2">
						<p class="text-xs uppercase tracking-widest font-semibold text-success">Jak mówić</p>
						<ul class="space-y-2" aria-label="Przykłady dobrych sformułowań">
							{#each wynik.tak as zdanie}
								<li class="text-sm leading-relaxed border-l-2 border-success pl-3">{zdanie}</li>
							{/each}
						</ul>
					</div>

					<div class="space-y-2">
						<p class="text-xs uppercase tracking-widest font-semibold text-destructive">Jak NIE mówić</p>
						<ul class="space-y-2" aria-label="Sformułowań których należy unikać">
							{#each wynik.nie as zdanie}
								<li class="text-sm leading-relaxed border-l-2 border-destructive pl-3 text-muted-foreground">{zdanie}</li>
							{/each}
						</ul>
					</div>
				</div>
			{/if}
		</div>
		</div><!-- koniec prawej kolumny -->
	</div><!-- koniec grid -->
</div>
