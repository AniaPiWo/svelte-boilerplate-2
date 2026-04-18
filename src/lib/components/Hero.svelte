<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
</script>

<main id="main-content">
	<section
		class="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center bg-muted px-6 pb-24 pt-32 text-center md:px-8 md:pb-28 md:pt-40"
		aria-labelledby="hero-heading"
	>
		<div class="max-w-2xl">
			<p class="mb-6 text-xs font-medium uppercase tracking-widest text-muted-foreground">
				Narzędzie dla nowoczesnych zespołów
			</p>

			<h1
				id="hero-heading"
				class="mb-6 text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl"
			>
				Przestań tracić czas.<br />Zacznij działać <span class="underline-accent">sprawnie.</span>
			</h1>

			<p class="mb-10 text-lg leading-relaxed text-muted-foreground md:text-xl">
				Jedno narzędzie do zarządzania całą pracą zespołu.<br class="hidden md:block" />
				Prosto, szybko i bez zbędnych komplikacji.
			</p>

			<div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
				<Button size="lg" href="/app">Przejdź do aplikacji</Button>
				<Button variant="ghost" href="/demo" class="text-muted-foreground hover:text-foreground">
					Zobacz demo
				</Button>
			</div>

			<p class="mt-12 border-t border-border pt-8 text-sm text-muted-foreground">
				Dołącz do 2&nbsp;000+ zespołów, które już oszczędzają czas każdego dnia
			</p>
		</div>
	</section>
</main>
