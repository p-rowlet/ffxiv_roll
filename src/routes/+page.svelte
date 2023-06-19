<script lang="ts">
	import Tab from "./../components/tab.svelte";
	import RollList from "./../components/rollList.svelte";
	import { currentTab } from "../store/stores";
	import { tablist } from "../data/tablist";
	import Search from "../components/search.svelte";
</script>

<main class="container max-w-7xl mx-auto pt-14 min-h-screen">
	<Search/>
	<Tab />
	{#if $currentTab.name === "all"}
		{#each tablist as tab}
			<RollList theme={tab.tabname} name={tab.name} listId={tab.id} />
		{/each}
	{:else}
    <RollList theme={$currentTab.tabname} name={$currentTab.name} listId={$currentTab.id}/>
	{/if}
</main>
