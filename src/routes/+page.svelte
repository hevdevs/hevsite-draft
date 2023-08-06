<script>
	import { BoxHeadingWrapper } from "$lib/index.js";
	import { slide } from "svelte/transition";

	const dialogueOptions = [
		"Hey there!", 
        "My name is Hev.",
		"I am a Software Developer and Tech Educator.",
        "Feel free to take a look around..."
	];
	let index = 0;

	function nextDialogue() {
		if (index === dialogueOptions.length - 1) index = 0;
		else index++;
	}
</script>

<main class="bg-slate-100 w-full h-screen box-border grid grid-rows-3">
	<header
		class={`row-span-1 w-full grid grid-cols-1 justify-items-center content-center`}
	>
		<BoxHeadingWrapper>
			{#key index}
				<h1 transition:slide class={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-game text-slate-900`}>
					{dialogueOptions[index]}
				</h1>
			{/key}
			<button
				class={`absolute bottom-4 right-4 text-4xl transition ease-in-out hover:text-sky-500`}
				on:click={nextDialogue}>{index === dialogueOptions.length - 1 ? "◀" : "▶"}</button
			>
		</BoxHeadingWrapper>
	</header>
	<section
		class={`row-span-2 grid justify-items-center content-center`}
	>
		<img
			class={`p-5 scale-70 max-w-sm object-contain overflow-hidden`}
			src={`../../images/hevhi.gif`}
			alt="pixel art gif of a small hev waving"
		/>
	</section>
</main>
