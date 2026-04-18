<script lang="ts">
	import { etapy } from '$lib/data/etapy';
</script>

<svelte:head>
	<title>Etapy starzenia — Rozmównik Pokoleń</title>
</svelte:head>

<div class="max-w-lg mx-auto px-6 py-10">
	<a href="/" class="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1 mb-8">
		← Wstecz
	</a>

	<h1 class="text-2xl font-bold tracking-tight mb-2">Etapy starzenia</h1>
	<p class="text-muted-foreground text-sm mb-8">Wybierz grupę wiekową, żeby dowiedzieć się więcej.</p>

	<div class="space-y-3">
		{#each etapy as etap}
			<a
				href="/etapy/{etap.id}"
				class="block p-5 rounded-xl border border-border hover:border-primary/50 hover:bg-secondary/50 transition-all group"
			>
				<div class="flex items-center justify-between gap-4">
					<div>
						<p class="font-semibold text-xl group-hover:text-primary transition-colors">
							{etap.label}
						</p>
						<p class="text-sm text-muted-foreground mt-1">{etap.opis}</p>
					</div>
					<span class="text-muted-foreground shrink-0">→</span>
				</div>
			</a>
		{/each}
	</div>
</div>
