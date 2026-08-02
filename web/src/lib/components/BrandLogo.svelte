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
		href="https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Libre+Baskerville:ital,wght@0,700;1,700&family=Montserrat:wght@700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<div
	class="inline-flex flex-col items-center leading-none"
	aria-label={ariaLabel}
	role="img"
>
	<h1
		class="m-0 bg-gradient-to-b from-[#078c16] to-[#08720f]
		       bg-clip-text font-['Hedra','Black_Han_Sans','Arial_Black',sans-serif]
		       text-[clamp(1.5rem,5vw,2.25rem)] font-black uppercase
		       tracking-[-0.025em] text-transparent
		       [text-shadow:0_0.075em_0_#075c0d]"
	>
		{brandName}
	</h1>

	<div
		class="mt-[0.05em] whitespace-nowrap
		       font-['Montserrat','Arial',sans-serif]
		       text-[clamp(0.6rem,1.8vw,0.8rem)] font-bold uppercase
		       tracking-[0.035em] text-[#5a4838]"
	>
		{descriptor}
	</div>

	<div
		class="mt-[0.4em]
		       font-['Libre_Baskerville',Georgia,serif]
		       text-[clamp(0.65rem,1.5vw,0.9rem)] font-bold italic
		       tracking-[0.015em] text-[#a8853f]"
	>
		{tagline}
	</div>
</div>
