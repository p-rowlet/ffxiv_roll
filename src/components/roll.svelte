<script lang="ts">
	import { searchText } from "../store/stores";
	import Arcodian from "./arcodian.svelte";

	export let id: number;
	export let ver: number;
	export let title: string;
	export let description: string;
	export let way: string;
	export let listId: number;
	export let link: string;

	let isClick: boolean = false;
	const rollClick = () => {
		isClick ? (isClick = false) : (isClick = true);
	};

    $: if($searchText.search === true){
        isClick = false;
    } 
</script>

<li>
	<button
		class="w-full grid grid-cols-roll gap-4 py-2 {isClick === false
			? 'border-b'
			: 'border-none'} boder-gray-400 text-center text-sm hover:bg-slate-100"
		on:click={rollClick}
	>
		<div>
			{id - listId}
		</div>
		<div>
			{ver}
		</div>
		<div class="whitespace-pre-wrap">
			{title}
		</div>
		<div class="whitespace-pre-wrap">
			{description}
		</div>
		<div class="whitespace-pre-wrap text-left">
			{way}
		</div>
	</button>
	{#if isClick}
		<Arcodian {title} {link} />
	{/if}
</li>
