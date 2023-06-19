<script lang="ts">
	export let id: number;
	export let name: string;
	export let tabname: string | null;
	import { currentTab } from "../store/stores";
	const click = (e: MouseEvent) => {
		currentTab.update((value) => {
			return {
				name: name ?? value.name,
				id: id ?? value.id,
				tabname: tabname ?? value.tabname,
			};
		});
	};
</script>

<button
	data-id={id}
	on:click={click}
	class={$currentTab.name === name
		? "border-b-2 border-sky-500"
		: "border-b-2 border-transparent"}
>
	{tabname}
</button>
