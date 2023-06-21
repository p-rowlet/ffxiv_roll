<script lang="ts">
	import { favorites } from "../store/stores";
	import Arcodian from "./arcodian.svelte";
	import Icon from "@iconify/svelte";
	export let id: number;
	export let ver: number;
	export let title: string;
	export let description: string;
	export let way: string;
	export let listId: number;
	export let link: string | undefined;
	export let favor: boolean | undefined;

	let isClick: boolean = false;
	const rollClick = () => {
		isClick = !isClick;
	};

	$: {
		title = title;
		isClick = false;
	}

	const starClick = (e: MouseEvent) => {
		e.stopPropagation();
		favor = !favor;
		favor
			? favorites.update((value) => [...value, id])
			: favorites.update((value) =>
					value.filter((favority) => favority !== id)
			);
		localStorage.setItem("favorities", JSON.stringify($favorites));
	};
</script>

<li>
	<button
		class="w-full grid grid-cols-roll gap-4 py-2 {isClick === false
			? 'border-b'
			: 'border-none'} 
            boder-gray-400 dark:border-gray-600 text-center text-sm
            hover:bg-slate-100 dark:hover:bg-gray-600"
		on:click={rollClick}
	>
		<div class="text-xl flex justify-center">
			<button on:click={starClick}>
				{#if favor}
					<Icon icon="mingcute:star-fill" />
				{:else}
					<Icon icon="mingcute:star-line" />
				{/if}
			</button>
		</div>
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
