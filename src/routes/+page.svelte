<script>
	import {
		DialogueBoxHeadingWrapper,
		Home,
		Projects,
		Skills,
		Socials,
	} from "$lib/index.js";

	const pages = [
		{ name: "home", component: Home },
		{ name: "projects", component: Projects },
		{ name: "skills", component: Skills },
		{ name: "socials", component: Socials },
	];

	let currPage = pages[0];

	function selectPage(page) {
		currPage = page;
	}
</script>

<main class="bg-slate-100 w-full h-screen box-border grid grid-rows-3">
	<header
		class={`row-span-1 w-full grid grid-cols-1 justify-items-center content-center`}
	>
		<DialogueBoxHeadingWrapper {selectPage} {pages} />
	</header>
	<svelte:component this={currPage.component} />
</main>
