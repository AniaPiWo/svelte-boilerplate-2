<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';
	import { PUBLIC_CONVEX_URL } from '$env/static/public';
	import { setupConvex } from 'convex-svelte';

	let { children } = $props();
	setupConvex(PUBLIC_CONVEX_URL);
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<style>
	:global(body) {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
	}
</style>

<a
	href="#main-content"
	class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-background focus:px-4 focus:py-2 focus:text-foreground focus:ring-2 focus:ring-ring"
>
	Przejdź do treści
</a>

<header class="w-full border-b border-border">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
	<a href="/" class="flex items-center gap-2">
		<svg viewBox="0 0 40 24" height="32" width="54" aria-hidden="true" fill="none">
			<circle cx="14" cy="12" r="11" stroke="var(--color-foreground)" stroke-width="1.8" />
			<circle cx="24" cy="12" r="11" fill="var(--color-primary)" />
		</svg>
		<span class="text-xl font-semibold tracking-tight text-primary">Bliżej</span>
	</a>
	<nav aria-label="Główna nawigacja" class="hidden items-center gap-8 text-sm text-muted-foreground md:flex">
		<a href="/rozmowy" class="hover:text-foreground transition-colors">Rozmowy</a>
		<a href="/konwerter" class="hover:text-foreground transition-colors">Tłumacz AI</a>
		<a href="/etapy" class="hover:text-foreground transition-colors">Etapy starzenia</a>
				<a href="/depresja" class="hover:text-foreground transition-colors">Depresja</a>
	</nav>
	<a
		href="/etapy"
		class="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90"
	>
		Zacznij
	</a>
	</div>
</header>

<main id="main-content" class="flex-1">
	{@render children()}
</main>

<footer class="border-t border-border bg-card">
	<div
		class="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-6 text-sm text-muted-foreground md:flex-row"
	>
		<div class="flex items-center gap-2">
			<svg viewBox="0 0 40 24" height="22" width="37" aria-hidden="true" fill="none">
				<circle cx="14" cy="12" r="11" stroke="var(--color-foreground)" stroke-width="1.8" />
				<circle cx="24" cy="12" r="11" fill="var(--color-primary)" />
			</svg>
			<span>© {new Date().getFullYear()} Bliżej</span>
		</div>
		<div class="text-center text-xs leading-snug">
			<span class="block">Stowarzyszenie</span>
			<span class="block font-medium text-foreground">mali bracia Ubogich</span>
		</div>
		<a href="tel:226350954" class="hover:text-foreground transition-colors">
			Telefon Zaufania: 22 635 09 54
		</a>
	</div>
</footer>
