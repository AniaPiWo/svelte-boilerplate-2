<script lang="ts">
	import { page } from '$app/state';
	import { etapy } from '$lib/data/etapy';
	import CardDeck from '$lib/components/CardDeck.svelte';
	import Quiz from '$lib/components/Quiz.svelte';

	const etap = $derived(etapy.find((e) => e.id === page.params.etap));
	let phase = $state<'cards' | 'quiz' | 'done'>('cards');
</script>

<svelte:head>
	<title>{etap?.label ?? 'Etap'} — Rozmównik Pokoleń</title>
</svelte:head>

{#if !etap}
	<div class="max-w-lg mx-auto px-6 py-10">
		<a href="/etapy" class="text-sm text-muted-foreground hover:text-foreground transition-colors">← Wstecz</a>
		<p class="mt-8 text-muted-foreground">Nie znaleziono etapu.</p>
	</div>
{:else}
	<div class="max-w-lg mx-auto px-6 py-10">
		<a href="/etapy" class="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8">
			← Wstecz
		</a>

		<div class="mb-8">
			<span class="text-xs uppercase tracking-widest text-muted-foreground font-medium">Etap starzenia</span>
			<h1 class="text-2xl font-bold tracking-tight mt-1">{etap.label}</h1>
			<p class="text-muted-foreground text-sm mt-1">{etap.opis}</p>
		</div>

		{#if phase === 'cards'}
			<CardDeck cards={etap.karty} oncomplete={() => (phase = 'quiz')}>
				{#snippet card(item)}
					<div class="bg-card border border-border rounded-xl p-6 min-h-[200px]">
						<p class="text-xs uppercase tracking-widest text-muted-foreground font-medium mb-3">
							{item.tytul}
						</p>
						<p class="text-base leading-relaxed">{item.tresc}</p>
					</div>
				{/snippet}
			</CardDeck>

		{:else if phase === 'quiz'}
			<div>
				<div class="flex items-center justify-between mb-6">
					<h2 class="text-lg font-semibold">Quiz</h2>
					<button
						onclick={() => (phase = 'cards')}
						class="text-sm text-muted-foreground hover:text-foreground transition-colors"
					>
						← Wróć do kart
					</button>
				</div>
				<Quiz questions={etap.quiz} />
			</div>

		{:else}
			<div class="text-center py-12 space-y-4">
				<p class="text-lg font-medium">Moduł ukończony</p>
				<a href="/etapy" class="inline-block mt-2 text-sm text-primary hover:opacity-80 transition-opacity">
					← Wróć do etapów
				</a>
			</div>
		{/if}
	</div>
{/if}
