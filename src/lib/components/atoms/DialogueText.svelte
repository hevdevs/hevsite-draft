<script>
	import { slide } from "svelte/transition";
	export let currDialogue;
</script>

<h1
	transition:slide
	class={`text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-game text-slate-900`}
>
	{currDialogue}
</h1>
