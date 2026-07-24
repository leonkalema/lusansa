<!-- Survey-plan graphic in brand colors — stands in for photography until real
     site photos exist (WEBSITE_GUIDE §5: a plan drawing beats a stock photo). -->
<svg
	viewBox="0 0 720 560"
	xmlns="http://www.w3.org/2000/svg"
	role="img"
	aria-label="Survey plan of a planned plot layout with an access road and marked boundaries"
	class="block h-auto w-full"
>
	<rect width="720" height="560" fill="#f1ede2" />

	<!-- grid -->
	<g stroke="#584838" stroke-opacity="0.08" stroke-width="1">
		{#each Array.from({ length: 17 }, (_, i) => i) as i (i)}
			<line x1={i * 45} y1="0" x2={i * 45} y2="560" />
		{/each}
		{#each Array.from({ length: 13 }, (_, i) => i) as i (i)}
			<line x1="0" y1={i * 45} x2="720" y2={i * 45} />
		{/each}
	</g>

	<!-- contours -->
	<g fill="none" stroke="#a3720a" stroke-opacity="0.18" stroke-width="1.2">
		<path d="M-20,470 C160,430 240,510 420,470 S650,420 740,450" />
		<path d="M-20,510 C170,475 260,545 440,510 S660,465 740,495" />
		<path d="M560,-20 C540,60 610,120 590,200 S520,330 560,420" />
	</g>

	<!-- access road -->
	<g fill="none">
		<path d="M-20,400 C140,360 220,330 320,250 S520,110 740,80" stroke="#503018" stroke-opacity="0.14" stroke-width="30" />
		<path d="M-20,400 C140,360 220,330 320,250 S520,110 740,80" stroke="#503018" stroke-opacity="0.4" stroke-width="1.5" stroke-dasharray="10 8" />
	</g>

	<!-- block 4 plots (upper side of road) -->
	<g fill="none" stroke="#221e1a" stroke-opacity="0.32" stroke-width="1">
		<path d="M120,285 l96,-58 42,66 -96,58 z" />
		<path d="M216,227 l96,-58 42,66 -96,58 z" />
		<path d="M312,169 l96,-58 42,66 -96,58 z" />
		<path d="M162,351 l96,-58 40,63 -96,58 z" />
		<path d="M354,235 l96,-58 40,63 -96,58 z" />
	</g>

	<!-- highlighted plot 12 -->
	<g>
		<path d="M258,293 l96,-58 40,63 -96,58 z" fill="#107800" fill-opacity="0.1" stroke="#107800" stroke-opacity="0.85" stroke-width="1.6" />
		<!-- boundary pegs -->
		<g fill="#107800">
			<rect x="254" y="289" width="7" height="7" />
			<rect x="350" y="231" width="7" height="7" />
			<rect x="390" y="294" width="7" height="7" />
			<rect x="294" y="352" width="7" height="7" />
		</g>
		<text x="322" y="302" font-size="15" font-weight="600" fill="#0b5a00" text-anchor="middle">12</text>
	</g>

	<!-- plot numbers -->
	<g font-size="12" fill="#584838" fill-opacity="0.75" text-anchor="middle">
		<text x="188" y="264">10</text>
		<text x="284" y="206">11</text>
		<text x="380" y="148">14</text>
		<text x="228" y="330">9</text>
		<text x="420" y="272">13</text>
	</g>

	<!-- labels -->
	<text x="94" y="452" font-size="11" letter-spacing="2.5" fill="#584838" fill-opacity="0.65">BLOCK 4 · NAKASSAJJA</text>
	<text x="490" y="128" font-size="11" letter-spacing="2" fill="#503018" fill-opacity="0.55" transform="rotate(-27 490 128)">MURRAM ACCESS ROAD 8M</text>

	<!-- coordinate ticks -->
	<g font-size="10.5" fill="#8a5f08" fill-opacity="0.8" style="font-variant-numeric: tabular-nums">
		<text x="14" y="24">0°28′09″N</text>
		<text x="632" y="546">32°38′41″E</text>
	</g>

	<!-- north arrow -->
	<g transform="translate(664,44)">
		<circle r="20" fill="none" stroke="#584838" stroke-opacity="0.45" stroke-width="1" />
		<path d="M0,-13 L6,8 L0,4 L-6,8 Z" fill="#584838" fill-opacity="0.65" />
		<text y="34" font-size="11" fill="#584838" fill-opacity="0.7" text-anchor="middle">N</text>
	</g>

	<!-- scale bar -->
	<g transform="translate(24,520)" stroke="#584838" stroke-opacity="0.55">
		<line x1="0" y1="0" x2="90" y2="0" stroke-width="1.5" />
		<line x1="0" y1="-4" x2="0" y2="4" />
		<line x1="45" y1="-3" x2="45" y2="3" />
		<line x1="90" y1="-4" x2="90" y2="4" />
		<text x="98" y="4" font-size="10.5" fill="#584838" fill-opacity="0.7" stroke="none">50 m</text>
	</g>
</svg>
