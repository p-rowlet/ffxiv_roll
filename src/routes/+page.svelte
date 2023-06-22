<script lang="ts">
	import Tab from "./../components/tab.svelte";
	import RollList from "./../components/rollList.svelte";
	import { data } from "../data/data";
	import { currentTab, favorites } from "../store/stores";
	import { tablist } from "../data/tablist";
	import Search from "../components/search.svelte";

	const favorityStorage = localStorage.getItem('favorities');
	const favorities = favorityStorage ? JSON.parse(favorityStorage) : [];
	favorites.set(favorities);

</script>

<main class="dark:bg-dark-default dark:text-dark-text py-14">
	<section class="container max-w-5xl mx-auto min-h-screen">
		<Search />
		<Tab />
		{#if $currentTab.name === "all"}
			{#each tablist as tab}
				<RollList theme={tab.tabname} listId={tab.id} data={data[tab.name]}/>
			{/each}
		{:else}
			<RollList
				theme={$currentTab.tabname}
				listId={$currentTab.id}
				data={data[$currentTab.name]}
			/>
		{/if}
	</section>
</main>
