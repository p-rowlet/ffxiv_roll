<script lang="ts">
	import { searchText } from "../store/stores";

	const search = (e: Event) => {
		const target = e.target as HTMLInputElement;
		target.value ?? searchText.set({ search: false, text: "" });
		searchText.set({
			search: true,
			text: target.value,
		});
	};

	const submit = (e: Event) => {
		e.preventDefault();
	};
</script>

<form class="pt-10 flex justify-center items-center" on:submit={submit}>
	<input
		type="text"
		name="search"
		id="search"
		class="border-b border-slate-400 p-3 w-3/4 md:w-2/4 focus:outline-none dark:bg-dark-default"
		placeholder="악보명, 테마로 검색"
		on:input={search}
		bind:value={$searchText.text}
		aria-label="악보명, 테마로 검색"
	/>
</form>
