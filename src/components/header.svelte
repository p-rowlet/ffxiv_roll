<script>
	import Icon from "@iconify/svelte";
	import { theme } from "../store/stores";

	const darkModeToggle = () => {
		theme.update((value) => (value === "light" ? "dark" : "light"));
		localStorage.setItem("theme", $theme);
	};
</script>

<header
	class="border-b boder-gray-400 dark:border-gray-600 p-4 fixed w-full bg-white dark:bg-gray-900 flex justify-between"
>
	<a
		href="/"
		class="font-['ONE-Mobile-POP'] text-2xl text-slate-700 dark:text-slate-300 pl-2"
	>
		FFXIV 오케스트리온
	</a>

	<div class="flex gap-4 text-4xl text-slate-700 dark:text-slate-300">
		<button on:click={darkModeToggle}>
			{#if $theme === "light"}
				<Icon icon="fa-solid:sun" />
			{:else}
				<Icon icon="solar:moon-bold" />
			{/if}
		</button>
		<button><Icon icon="uiw:setting" /></button>
	</div>
</header>
