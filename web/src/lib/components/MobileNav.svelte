<script lang="ts">
	import { generalMessage } from '$lib/whatsapp';
	import WhatsAppCta from '$lib/components/WhatsAppCta.svelte';

	let open = $state(false);

	const links = [
		{ href: '/projects', label: 'Projects' },
		{ href: '/plots', label: 'Plots' },
		{ href: '/services', label: 'Services' },
		{ href: '/guides', label: 'Guides' }
	];

	function toggle(): void {
		open = !open;
	}

	function close(): void {
		open = false;
	}
</script>

<button
	class="mobile-nav-toggle"
	onclick={toggle}
	aria-expanded={open}
	aria-label={open ? 'Close menu' : 'Open menu'}
	aria-controls="mobile-nav"
>
	<span class="bar" class:bar-1-open={open}></span>
	<span class="bar" class:bar-2-open={open}></span>
	<span class="bar" class:bar-3-open={open}></span>
</button>

{#if open}
	<div id="mobile-nav" class="mobile-nav-panel">
		<nav class="mobile-nav-links">
			{#each links as link (link.href)}
				<a href={link.href} onclick={close} class="mobile-nav-link">{link.label}</a>
			{/each}
		</nav>
		<WhatsAppCta
			message={generalMessage}
			label="WhatsApp us"
			class="!mt-4 !w-full !justify-center"
		/>
	</div>
{/if}

<style>
	.mobile-nav-toggle {
		display: inline-flex;
		flex-direction: column;
		justify-content: center;
		gap: 5px;
		width: 44px;
		height: 44px;
		padding: 10px 11px;
		background: none;
		border: none;
		cursor: pointer;
	}

	.mobile-nav-toggle .bar {
		display: block;
		height: 2px;
		width: 100%;
		background-color: var(--color-green-800);
		border-radius: 1px;
		transition: transform 220ms cubic-bezier(0.22, 1, 0.36, 1),
			opacity 160ms ease;
	}

	.mobile-nav-toggle .bar-1-open {
		transform: translateY(7px) rotate(45deg);
	}
	.mobile-nav-toggle .bar-2-open {
		opacity: 0;
	}
	.mobile-nav-toggle .bar-3-open {
		transform: translateY(-7px) rotate(-45deg);
	}

	.mobile-nav-panel {
		position: absolute;
		top: 100%;
		left: 0;
		right: 0;
		border-bottom: 1px solid var(--color-brown-700);
		background-color: var(--color-paper);
		box-shadow: 0 12px 24px rgba(0, 0, 0, 0.08);
		padding: 1.25rem 1.5rem 1.75rem;
	}

	.mobile-nav-links {
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
	}

	.mobile-nav-link {
		display: block;
		padding: 0.875rem 0;
		font-size: 1.0625rem;
		font-weight: 500;
		color: var(--color-green-800);
		border-bottom: 1px solid rgba(88, 72, 56, 0.08);
		text-underline-offset: 4px;
	}

	.mobile-nav-link:last-child {
		border-bottom: none;
	}

	@media (min-width: 640px) {
		.mobile-nav-toggle {
			display: none;
		}
		.mobile-nav-panel {
			display: none;
		}
	}
</style>
