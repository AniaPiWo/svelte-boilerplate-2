<script lang="ts">
	import type { HTMLButtonAttributes, HTMLAnchorAttributes } from 'svelte/elements';
	import { buttonVariants, type Variant, type Size } from './index.js';
	import { cn } from '$lib/utils.js';

	interface ButtonProps extends HTMLButtonAttributes {
		variant?: Variant;
		size?: Size;
		class?: string;
		href?: undefined;
	}

	interface AnchorProps extends HTMLAnchorAttributes {
		variant?: Variant;
		size?: Size;
		class?: string;
		href: string;
	}

	type Props = ButtonProps | AnchorProps;

	let { variant = 'default', size = 'default', class: className, href, children, ...rest }: Props =
		$props();
</script>

{#if href}
	<a
		{href}
		class={cn(buttonVariants({ variant, size }), className)}
		{...(rest as HTMLAnchorAttributes)}
	>
		{@render children?.()}
	</a>
{:else}
	<button
		type="button"
		class={cn(buttonVariants({ variant, size }), className)}
		{...(rest as HTMLButtonAttributes)}
	>
		{@render children?.()}
	</button>
{/if}
