<script lang="ts">
	import Roll from "./roll.svelte";
	import { favorites, searchText } from "../store/stores";
	type RollData = {
		title: string;
		description: string;
		id: number;
		ver: number;
		way: string;
		link: string | undefined;
		favor: boolean | undefined;
	};

	export let theme: string;
	export let listId: number;
	export let data: RollData[];

	function filterDataByFavorites(data: RollData[], favorities: number[]) {
		const favorityData = data.filter((data) =>
			favorities.includes(data.id)
		);
		favorityData.map((data) => {
			data.favor = true;
		});
		const notFavorityData = data.filter(
			(data) => !favorities.includes(data.id)
		);

		notFavorityData.map((data)=>{
			data.favor = false;
		})
		return [...favorityData, ...notFavorityData];
	}

	$: sortedData = filterDataByFavorites(data, $favorites);

	$: searchData =
		$searchText.search &&
		sortedData.filter((data: RollData) => {
			const checkText = $searchText.text.toLowerCase();
			return (
				data.title.toLowerCase().includes(checkText) ||
				data.description.toLowerCase().includes(checkText)
			);
		});
</script>

<h1 class="mt-4 font-bold text-lg">{theme}</h1>
<ul class="max-w-7xl mx-auto">
	<li
		class="grid grid-cols-roll gap-4 py-2 text-center font-bold rounded-md bg-slate-200 dark:bg-gray-700"
	>
		<div />
		<div>No</div>
		<div>버전</div>
		<div>이름</div>
		<div>테마</div>
		<div>입수방법</div>
	</li>
	{#if $searchText.search}
		{#if searchData && searchData.length > 0}
			{#each searchData as roll}
				<Roll {...roll} {listId} />
			{/each}
		{:else}
			<li class="text-center">해당하는 악보가 존재하지 않습니다.</li>
		{/if}
	{:else}
		{#each sortedData as roll}
			<Roll {...roll} {listId} />
		{/each}
	{/if}
</ul>
