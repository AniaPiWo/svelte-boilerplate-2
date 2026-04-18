<script lang="ts">
	import { fade } from 'svelte/transition';

	type Question = {
		pytanie: string;
		odpowiedzi: string[];
		poprawna: number;
	};

	let { questions }: { questions: Question[] } = $props();

	let current = $state(0);
	let selected = $state<number | null>(null);
	let score = $state(0);
	let done = $state(false);

	function answer(i: number) {
		if (selected !== null) return;
		selected = i;
		if (i === questions[current].poprawna) score++;
	}

	function next() {
		if (current < questions.length - 1) {
			current++;
			selected = null;
		} else {
			done = true;
		}
	}

	const resultLabel = $derived(
		score === questions.length
			? 'Doskonale! Wszystkie odpowiedzi poprawne.'
			: score >= Math.ceil(questions.length / 2)
				? 'Dobry wynik! Wiesz już sporo.'
				: 'Warto powtórzyć materiał z kart.'
	);

	const feedbackText = $derived(
		selected === null
			? ''
			: selected === questions[current]?.poprawna
				? 'Dobrze!'
				: `Błędna odpowiedź. Poprawna: "${questions[current]?.odpowiedzi[questions[current]?.poprawna]}"`
	);
</script>

{#if done}
	<div
		in:fade={{ duration: 200 }}
		role="status"
		aria-live="polite"
		class="text-center py-8 space-y-3"
	>
		<p class="text-5xl font-bold" aria-label="Wynik: {score} na {questions.length}">{score}/{questions.length}</p>
		<p class="text-muted-foreground">{resultLabel}</p>
	</div>
{:else}
	{#key current}
		<div in:fade={{ duration: 150 }} class="space-y-4">
			<p class="text-xs text-muted-foreground uppercase tracking-wide font-medium" aria-live="polite">
				Pytanie {current + 1} z {questions.length}
			</p>
			<p id="quiz-question" class="text-lg font-medium leading-snug">{questions[current].pytanie}</p>

			<div class="space-y-2 pt-1" role="group" aria-labelledby="quiz-question">
				{#each questions[current].odpowiedzi as odpowiedz, i}
					{@const isSelected = selected === i}
					{@const isCorrect = i === questions[current].poprawna}
					{@const showFeedback = selected !== null}
					<button
						onclick={() => answer(i)}
						disabled={selected !== null}
						aria-pressed={isSelected || undefined}
						aria-label="{odpowiedz}{showFeedback && isCorrect ? ' — poprawna odpowiedź' : showFeedback && isSelected && !isCorrect ? ' — błędna odpowiedź' : ''}"
						class="w-full text-left p-4 rounded-lg border text-sm transition-all
							focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none
							{showFeedback && isCorrect
							? 'border-success bg-success/10 font-medium'
							: showFeedback && isSelected && !isCorrect
								? 'border-destructive bg-destructive/10'
								: 'border-border hover:bg-secondary disabled:cursor-default'}"
					>
						<!-- Ukryty tekst ze stanem dla AT -->
						{#if showFeedback && isCorrect}
							<span class="sr-only">Poprawna odpowiedź: </span>
						{:else if showFeedback && isSelected && !isCorrect}
							<span class="sr-only">Błędna odpowiedź: </span>
						{/if}
						{odpowiedz}
					</button>
				{/each}
			</div>

			{#if selected !== null}
				<div in:fade={{ duration: 100 }}>
					<p role="status" aria-live="polite" class="text-sm text-muted-foreground mb-3">
						{feedbackText}
					</p>
					<button
						onclick={next}
						class="w-full py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm
							hover:opacity-90 transition-opacity focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-offset-2"
					>
						{current === questions.length - 1 ? 'Zobacz wynik' : 'Następne pytanie'}
					</button>
				</div>
			{/if}
		</div>
	{/key}
{/if}
