<script lang="ts">
	import { page } from '$app/state';
	import { rozmowy } from '$lib/data/rozmowy';
	import CardDeck from '$lib/components/CardDeck.svelte';
	import Quiz from '$lib/components/Quiz.svelte';

	const rozmowa = $derived(rozmowy.find((r) => r.id === page.params.temat));
	let phase = $state<'cards' | 'quiz' | 'done'>('cards');
</script>

<svelte:head>
	<title>{rozmowa?.tytul ?? 'Rozmowa'} — Bliżej</title>
</svelte:head>

{#if !rozmowa}
	<div class="max-w-lg mx-auto px-6 py-10">
		<a href="/rozmowy" class="text-sm text-muted-foreground hover:text-foreground transition-colors">← Wstecz</a>
		<p class="mt-8 text-muted-foreground">Nie znaleziono scenariusza.</p>
	</div>
{:else}
	<div class="max-w-lg mx-auto px-6 py-10">
		<a href="/rozmowy" class="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8">
			← Wstecz
		</a>

		<div class="mb-8">
			<span class="text-xs uppercase tracking-widest text-muted-foreground font-medium">Trudna rozmowa</span>
			<h1 class="text-2xl font-bold tracking-tight mt-1">{rozmowa.tytul}</h1>
			<p class="text-muted-foreground text-sm mt-1">{rozmowa.opis}</p>
		</div>

		{#if phase === 'cards'}
			<CardDeck cards={rozmowa.karty} oncomplete={() => (phase = 'quiz')}>
				{#snippet card(item)}
					<div class="bg-card border border-border rounded-xl p-6 space-y-5 min-h-[260px]">
						<p class="text-sm font-medium leading-snug text-foreground">{item.sytuacja}</p>

						<div class="space-y-2">
							<p class="text-xs uppercase tracking-widest font-semibold text-success">Jak mówić</p>
							<ul class="space-y-2" aria-label="Przykłady dobrych sformułowań">
								{#each item.tak as zdanie}
									<li class="text-sm leading-relaxed border-l-2 border-success pl-3 text-foreground">
										{zdanie}
									</li>
								{/each}
							</ul>
						</div>

						<div class="space-y-2">
							<p class="text-xs uppercase tracking-widest font-semibold text-destructive">Jak NIE mówić</p>
							<ul class="space-y-2" aria-label="Sformułowań których należy unikać">
								{#each item.nie as zdanie}
									<li class="text-sm leading-relaxed border-l-2 border-destructive pl-3 text-muted-foreground">
										{zdanie}
									</li>
								{/each}
							</ul>
						</div>
					</div>
				{/snippet}
			</CardDeck>

		{:else if phase === 'quiz'}
			<div>
				<div class="flex items-center justify-between mb-6">
					<h2 class="text-lg font-semibold">Quiz</h2>
					<button
						onclick={() => (phase = 'cards')}
						class="text-sm text-muted-foreground hover:text-foreground transition-colors
							focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none rounded"
					>
						← Wróć do kart
					</button>
				</div>
				<Quiz questions={rozmowa.quiz} />
			</div>

		{:else}
			<div class="text-center py-12 space-y-4">
				<p class="text-lg font-medium">Scenariusz ukończony</p>
				<a href="/rozmowy" class="inline-block mt-2 text-sm text-primary hover:opacity-80 transition-opacity">
					← Wróć do rozmów
				</a>
			</div>
		{/if}
	</div>
{/if}
