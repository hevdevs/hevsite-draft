<script>
	import { DialogueText, NextArrowButton } from "$lib/index";

	const dialogueOptions = [
		"Hey there!",
		"My name is Hev.",
		"I am a Software Developer and Tech Educator.",
		"Feel free to take a look around...",
	];

	let index = 0;

	function getNextDialogue() {
		if (index === dialogueOptions.length - 1) index = 0;
		else index++;
	}
</script>

<div
	class={`relative w-3/4 max-w-3xl h-52 p-5 bg-sky-100 border-8 border-slate-900`}
>
	{#key dialogueOptions[index]}
		<DialogueText currDialogue={dialogueOptions[index]} />
	{/key}
	<NextArrowButton
		{getNextDialogue}
		isLast={index === dialogueOptions.length - 1}
	/>
</div>
