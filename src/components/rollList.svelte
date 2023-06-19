<script lang="ts">
	import Roll from "./roll.svelte";
    import { data } from "../data/data";

    export let theme : string;
    export let name : string;
    export let listId : number;
    $: currentData = data[name];
</script>

<h1 class="mt-4 font-bold text-lg">{theme}</h1>
<ul class="max-w-7xl mx-auto ">
    <li class="grid grid-cols-roll gap-4 py-2 text-center font-bold rounded-md bg-slate-200">
        <div>No</div>
        <div>버전</div>
        <div>이름</div>
        <div>테마</div>
        <div>입수방법</div>
    </li>
    {#each currentData as roll}
        <Roll {...roll} listId={listId}/>
    {/each}
</ul>