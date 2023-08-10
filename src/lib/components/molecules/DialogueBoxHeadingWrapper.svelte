<script>
	import { DialogueText, NextArrowButton } from "$lib/index";
	export let selectPage;
	export let pages;
	export let currPage; 
	const dialogueOptions = [
		"Hey there!",
		"My name is Hev.",
		"I am a Software Developer and Tech Educator.",
		"Feel free to take a look around...",
	];

	let index = 0;
	let isOpen = false;
	function setOpen() {
		isOpen = !isOpen;
	}
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
	<div
		role="button"
		tabindex="0"
		on:keydown={() => setOpen()}
		class="absolute group space-y-1 top-4 right-4"
		on:click={() => setOpen()}
	>
		<span class="block w-8 h-1 bg-slate-900 group-hover:bg-sky-500" />
		<span class="block w-8 h-1 bg-slate-900 group-hover:bg-sky-500" />
		<span class="block w-8 h-1 bg-slate-900 group-hover:bg-sky-500" />
	</div>

	{#if isOpen}
		<div class={`w-1/3 min-w-fit z-10 p-2.5 top-12 -right-2 absolute bg-sky-500 border-8 border-slate-900 text-justify`}>
			{#each pages as page}
				<button
					class={`text-3xl menu-item hover:text-slate-100 font-game leading-relaxed ${currPage.name === page.name? 'underline underline-offset-8 decoration-solid decoration-4' : ''}`}
					role="link"
					on:click={() => {
						setOpen();
						selectPage(page);
					}}>{page.name}</button
				>
				<br />
			{/each}
		</div>
	{/if}
	<NextArrowButton
		{getNextDialogue}
		isLast={index === dialogueOptions.length - 1}
	/>
</div>
