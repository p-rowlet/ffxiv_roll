<script lang="ts">
	import TabButton from "./tabButton.svelte";
	import { tablist } from "../data/tablist";
</script>

<nav id="tab_group" class="grid grid-cols-3 px-5 md:flex md:justify-center pt-6 gap-3 mb-3">
		<TabButton id = {0} tabname="전체" name="all" />
	{#each tablist as tab}
		<TabButton {...tab} />
	{/each}
</nav>
