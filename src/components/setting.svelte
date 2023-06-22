<script lang="ts">
	import Icon from "@iconify/svelte";
	import { favorites } from "../store/stores";
	import { fade } from 'svelte/transition';

	export let closeModal: () => void;
	let value:string = "";
	let isImportError:boolean = false; 

	const bgClick = (e: MouseEvent) => {
		const target = e.target as HTMLInputElement;
		if (target.id === "settingModal") {
			closeModal();
		}
	};

	const exportData = () => {
		const data = localStorage.getItem("favorities");
		value = data || "";
	};

	const importData = () => {
		try{
			JSON.parse(value);
			localStorage.setItem("favorities", value);
			favorites.set(JSON.parse(value));
		} catch{
			isImportError = true;
			setTimeout(()=>{isImportError = false}, 3000);
		}
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
	class="fixed left-0 top-0 w-screen h-screen text-sm bg-black bg-opacity-80"
	on:click={bgClick} transition:fade
>
	<div class="flex justify-center items-center h-screen" id="settingModal">
		<div
			class="flex flex-col items-center max-w-full md:max-w-3xl px-4 py-6 pt-3 gap-3 bg-slate-200 dark:bg-slate-700 rounded-md"
		>
			<div class="flex w-full items-center justify-between">
				<h1
					class="text-3xl font-['ONE-Mobile-POP'] dark:text-slate-100"
				>
					환경설정
				</h1>
				<button
					aria-label="창 닫기"
					class="text-5xl text-gray-700 dark:text-slate-300"
					on:click={closeModal}
					><Icon icon="iconamoon:close-bold" /></button
				>
			</div>
			<!-- 6.4에 추가
                <div>
				<input type="checkbox" name="hidden_roll" id="hidden_roll" />
				<label for="hidden_roll">최신 악보 숨기기</label>
				<p><span class="font-bold">최신 악보 버전 :</span> 6.3</p>
			</div> -->
			{#if isImportError}
				<div class="flex gap-2 items-center rounded-md bg-yellow-200 p-3" transition:fade>
					<div class="text-xl" aria-label="안내">
						<Icon icon="ci:info" />
					</div>
					<p>적용할 수 없는 데이터입니다.</p>
				</div>
			{/if}
			<div class="relative max-w-[80vw] md:max-w-3xl">
				<textarea
					name="favority_data"
					id=""
					cols="60"
					rows="8"
					class="resize-none focus:outline-none max-w-[80vw]"
					bind:value
				/>
				<button
					class="absolute right-0 top-0 z-10 px-2 py-1 text-lg text-orange-900 bg-orange-100"
					aria-label="텍스트 복사"
					><Icon icon="mingcute:copy-line" /></button
				>
			</div>
			<div class="flex gap-3">
				<button
					class="p-2 bg-blue-900 hover:bg-blue-950 text-white rounded-sm"
					on:click={exportData}>즐겨찾기 데이터 가져오기</button
				>
				<button
					class="p-2 bg-blue-900 hover:bg-blue-950 text-white rounded-sm"
					on:click={importData}>즐겨찾기 적용</button
				>
			</div>
		</div>
	</div>
</div>
