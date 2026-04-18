<script lang="ts">
	// Podmień na prawdziwe importy gdy dodasz pliki do src/lib/assets/:
	// import logo from '$lib/assets/blizej-logo.png';
	// import hero from '$lib/assets/blizej-hero.jpg';
	import hug from '$lib/assets/hug.webp';
</script>

<svelte:head>
	<title>Bliżej — Rozmowy, które łączą pokolenia</title>
	<meta
		name="description"
		content="Bliżej pomaga dzieciom i wnukom prowadzić trudne rozmowy z seniorami: o samotności, depresji, etapach starzenia i ważnych decyzjach."
	/>
</svelte:head>

<!-- Hero -->
<section
	class="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-20 pt-10 md:grid-cols-2 md:pt-16"
>
	<div class="space-y-6">
		<span
			class="inline-flex rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
		>
			Dla dzieci i wnuków seniorów
		</span>
		<h1 class="text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
			Rozmowy, które <span class="text-primary">łączą pokolenia</span>.
		</h1>
		<p class="max-w-lg text-lg text-muted-foreground">
			Bliżej to praktyczny przewodnik po trudnych rozmowach z rodzicami i dziadkami — o
			samotności, zdrowiu i ważnych decyzjach. Bez oceniania, z empatią.
		</p>
		<div class="flex flex-wrap items-center gap-3 pt-2">
			<a
				href="/etapy"
				class="rounded-full bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-md transition hover:opacity-90"
			>
				Rozpocznij przewodnik
			</a>
			<a
				href="#jak-to-dziala"
				class="rounded-full border border-border bg-card px-6 py-3 text-base font-medium text-foreground transition hover:bg-secondary"
			>
				Jak to działa
			</a>
		</div>
		<p class="pt-4 text-sm text-muted-foreground">
			Telefon Zaufania dla Seniorów:
			<a href="tel:226350954" class="font-medium text-primary hover:underline">22 635 09 54</a>
		</p>
	</div>

<div class="relative">
  <img 
    src={hug} 
    alt="Dorosła córka trzymająca za ręce starszą mamę przy stole"
    class="w-full object-cover"
  />
</div>
</section>

<!-- Moduły -->
<section id="jak-to-dziala" class="bg-secondary/50 py-20">
	<div class="mx-auto max-w-6xl px-6">
		<div class="mb-12 max-w-2xl">
			<h2 class="text-3xl font-semibold tracking-tight md:text-4xl">
				Zrozum. Porozmawiaj. Bądź obok.
			</h2>
			<p class="mt-4 text-muted-foreground">
				Cztery moduły, które przygotują Cię do najważniejszych rozmów z bliskim seniorem.
			</p>
		</div>

		<div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
			{#each [
				{ num: '01', title: 'Etapy starzenia', desc: '60+, 75+, 85+ — zmiany fizyczne, psychiczne i czerwone flagi samotności.', href: '/etapy' },
				{ num: '02', title: 'Trudne rozmowy', desc: 'Samotność, rezygnacja z auta, przeprowadzka do DPS — jak mówić, a jak nie.', href: '/rozmowy' },
				{ num: '03', title: 'Depresja u seniora', desc: 'Checklist objawów i konkretne kroki, które możesz zrobić dziś.', href: '/depresja' },
				{ num: '04', title: 'Tłumacz dla seniora', desc: 'Napisz co chcesz powiedzieć — AI przepisze to na język zrozumiały dla Twojego bliskiego.', href: '/konwerter' }
			] as card}
				<a
					href={card.href}
					class="group rounded-2xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md hover:border-primary/40"
				>
					<div class="text-sm font-medium text-primary">{card.num}</div>
					<h3 class="mt-3 text-xl font-semibold group-hover:text-primary transition-colors">{card.title}</h3>
					<p class="mt-2 text-sm text-muted-foreground">{card.desc}</p>
				</a>
			{/each}
		</div>
	</div>
</section>

<!-- CTA -->
<section class="mx-auto max-w-4xl px-6 py-24 text-center">
	<h2 class="text-3xl font-semibold tracking-tight md:text-4xl">
		Najtrudniejsze rozmowy są też najważniejsze.
	</h2>
	<p class="mx-auto mt-5 max-w-xl text-muted-foreground">
		Nie musisz wiedzieć wszystkiego. Wystarczy, że zaczniesz — my podpowiemy jak.
	</p>
	<a
		href="/etapy"
		class="mt-8 inline-flex rounded-full bg-primary px-7 py-3 text-base font-medium text-primary-foreground shadow-md transition hover:opacity-90"
	>
		Zacznij teraz
	</a>
</section>
