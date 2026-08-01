<script lang="ts">
	import { site } from '$lib/content/site';

	const brandName = 'LUSANSA';
	const descriptor = 'Property Services Ltd';
	const tagline = site.tagline;
	const ariaLabel = `${brandName} logo`;
</script>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&family=League+Spartan:wght@800;900&family=Oswald:wght@600&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="inline-flex flex-col items-center leading-none"
	aria-label={ariaLabel}
	role="img"
>
	<h1
		class="m-0 bg-gradient-to-b from-[#2b9c20] to-[#0d6811]
		       bg-clip-text font-['League_Spartan','Arial_Black',sans-serif]
		       text-[clamp(1.5rem,5vw,2.25rem)] font-black uppercase
		       tracking-[-0.055em] text-transparent
		       drop-shadow-[0_0.07em_0_rgba(33,76,25,0.28)]"
	>
		{brandName}
	</h1>

	<div
		class="mt-[0.05em] whitespace-nowrap
		       font-['Oswald','Arial_Narrow',sans-serif]
		       text-[clamp(0.6rem,1.8vw,0.8rem)] font-semibold uppercase
		       tracking-[0.035em] text-[#8b8177]"
	>
		{descriptor}
	</div>

	<div
		class="mt-[0.4em]
		       font-['Cormorant_Garamond',Georgia,serif]
		       text-[clamp(0.65rem,1.5vw,0.9rem)] font-semibold italic
		       tracking-[0.015em] text-[#c3a15f]"
	>
		{tagline}
	</div>
</div>
