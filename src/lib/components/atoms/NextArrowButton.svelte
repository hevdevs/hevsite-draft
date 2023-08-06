<script>
	export let getNextDialogue;
	export let isLast;
</script>

<button
	class={`absolute bottom-4 right-4 text-4xl transition ease-in-out hover:text-sky-500`}
	on:click={getNextDialogue}
	>{#if isLast}◀{:else}▶{/if}</button
>
