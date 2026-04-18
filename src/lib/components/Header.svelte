<script lang="ts">
	import { Button } from '$lib/components/ui/button/index.js';
	import { onMount } from 'svelte';

	let scrolled = $state(false);

	onMount(() => {
		const handleScroll = () => {
			scrolled = window.scrollY > 10;
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		return () => window.removeEventListener('scroll', handleScroll);
	});
</script>

<header
	class="fixed top-0 z-50 w-full bg-background/80 backdrop-blur-sm transition-shadow duration-200 {scrolled
		? 'shadow-sm'
		: ''}"

>
	<nav
		class="mx-auto flex h-16 max-w-5xl items-center justify-between border-b border-border px-6 md:px-8"
		aria-label="Nawigacja główna"
	>
		<a href="/" class="text-xl font-bold tracking-tight text-foreground">
			LOGO
		</a>

		<Button variant="outline" size="sm" href="/app">Przejdź do aplikacji</Button>
	</nav>
</header>
