<script lang="ts" generics="T">
	import { fade } from 'svelte/transition';
	import type { Snippet } from 'svelte';

	let {
		cards,
		card,
		oncomplete
	}: {
		cards: T[];
		card: Snippet<[T, number]>;
		oncomplete?: () => void;
	} = $props();

	let current = $state(0);
	let touchStartX = 0;

	function prev() {
		if (current > 0) current--;
	}

	function next() {
		if (current < cards.length - 1) {
			current++;
		} else {
			oncomplete?.();
		}
	}

	function onkeydown(e: KeyboardEvent) {
		if (e.key === 'ArrowRight') next();
		if (e.key === 'ArrowLeft') prev();
	}

	function ontouchstart(e: TouchEvent) {
		touchStartX = e.touches[0].clientX;
	}

	function ontouchend(e: TouchEvent) {
		const diff = e.changedTouches[0].clientX - touchStartX;
		if (diff < -50) next();
		else if (diff > 50) prev();
	}
</script>

<div
	class="outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-xl"
	tabindex="0"
	role="region"
	aria-label="Karty edukacyjne, karta {current + 1} z {cards.length}"
	{onkeydown}
>
	<!-- Ogłoszenie dla czytników ekranowych -->
	<span class="sr-only" aria-live="polite" aria-atomic="true">
		Karta {current + 1} z {cards.length}
	</span>

	<div {ontouchstart} {ontouchend} class="touch-pan-y">
		{#key current}
			<div in:fade={{ duration: 150 }}>
				{@render card(cards[current], current)}
			</div>
		{/key}
	</div>

	<!-- Progress dots — dekoracyjne, ukryte przed AT -->
	<div class="flex justify-center gap-2 mt-6" aria-hidden="true">
		{#each cards as _, i}
			<span
				class="h-2 rounded-full transition-all duration-200 {i === current
					? 'w-6 bg-primary'
					: 'w-2 bg-border'}"
			></span>
		{/each}
	</div>

	<div class="flex items-center justify-between mt-5 gap-3">
		<button
			onclick={prev}
			disabled={current === 0}
			aria-label="Poprzednia karta"
			class="flex-1 py-3 px-4 rounded-lg border border-border text-sm font-medium
				disabled:opacity-30 hover:bg-secondary transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
		>
			Poprzednia
		</button>
		<span class="text-sm text-muted-foreground shrink-0 tabular-nums" aria-hidden="true">
			{current + 1} / {cards.length}
		</span>
		<button
			onclick={next}
			aria-label={current === cards.length - 1 ? 'Przejdź do quizu' : `Następna karta, ${current + 2} z ${cards.length}`}
			class="flex-1 py-3 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium
				hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-offset-2"
		>
			{current === cards.length - 1 ? 'Przejdź do quizu' : 'Następna'}
		</button>
	</div>
</div>
