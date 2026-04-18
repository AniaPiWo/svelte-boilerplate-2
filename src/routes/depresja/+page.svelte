<script lang="ts">
	import { objawy, kroki } from '$lib/data/depresja';

	let checked = $state<Record<string, boolean>>({});
	const count = $derived(Object.values(checked).filter(Boolean).length);

	const poziom = $derived(
		count === 0
			? null
			: count <= 2
				? { label: 'Obserwuj', opis: 'Niewiele objawów — warto jednak uważnie obserwować samopoczucie seniora.', color: 'text-muted-foreground' }
				: count <= 5
					? { label: 'Reaguj', opis: 'Kilka objawów — porozmawiaj ze seniorem i rozważ wizytę u lekarza.', color: 'text-success' }
					: { label: 'Działaj teraz', opis: 'Wiele objawów — nie zwlekaj. Skontaktuj się z lekarzem lub zadzwoń na telefon zaufania.', color: 'text-destructive' }
	);
</script>

<svelte:head>
	<title>Depresja u seniora — Bliżej</title>
</svelte:head>

<div class="max-w-lg mx-auto px-6 py-10">
	<a href="/" class="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8">
		← Wstecz
	</a>

	<div class="mb-8">
		<span class="text-xs uppercase tracking-widest text-muted-foreground font-medium">Rozpoznanie</span>
		<h1 class="text-2xl font-bold tracking-tight mt-1">Depresja u seniora</h1>
		<p class="text-muted-foreground text-sm mt-1">
			Zaznacz objawy, które zauważasz u swojego bliskiego.
		</p>
	</div>

	<fieldset class="space-y-2 mb-8">
		<legend class="sr-only">Lista objawów depresji — zaznacz te, które obserwujesz</legend>
		{#each objawy as objaw}
			<label
				class="flex items-start gap-3 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-colors cursor-pointer
					{checked[objaw.id] ? 'border-primary/50 bg-secondary/50' : ''}"
			>
				<input
					type="checkbox"
					bind:checked={checked[objaw.id]}
					class="mt-0.5 shrink-0 accent-primary h-4 w-4"
				/>
				<span class="text-sm leading-relaxed">{objaw.tresc}</span>
			</label>
		{/each}
	</fieldset>

	{#if poziom}
		<div
			role="status"
			aria-live="polite"
			aria-atomic="true"
			class="mb-10 p-5 rounded-xl border border-border bg-secondary/30"
		>
			<p class="font-semibold {poziom.color}">
				{poziom.label} — {count}/{objawy.length} objawów
			</p>
			<p class="text-sm text-muted-foreground mt-1">{poziom.opis}</p>
		</div>
	{/if}

	<div>
		<h2 class="text-lg font-semibold mb-5">Co zrobić?</h2>
		<ol class="space-y-4" aria-label="Kroki do podjęcia">
			{#each kroki as krok}
				<li class="flex gap-4 p-4 rounded-xl border border-border">
					<span class="text-2xl font-bold text-primary shrink-0 leading-none mt-0.5" aria-hidden="true">{krok.nr}</span>
					<div>
						<p class="font-semibold text-sm">{krok.tytul}</p>
						<p class="text-sm text-muted-foreground mt-1 leading-relaxed">{krok.opis}</p>
					</div>
				</li>
			{/each}
		</ol>
	</div>
</div>
