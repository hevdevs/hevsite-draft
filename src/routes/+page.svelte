<script>
	import { DialogueBoxHeadingWrapper } from "$lib/index.js";
</script>

<main class="bg-slate-100 w-full h-screen box-border grid grid-rows-3">
	<header
		class={`row-span-1 w-full grid grid-cols-1 justify-items-center content-center`}
	>
		<DialogueBoxHeadingWrapper />
	</header>
	<section class={`row-span-2 grid justify-items-center content-center`}>
		<img
			class={`p-5 scale-70 max-w-sm object-contain overflow-hidden`}
			src={`../../images/hevhi.gif`}
			alt="pixel art gif of a small hev waving"
		/>
	</section>
</main>
