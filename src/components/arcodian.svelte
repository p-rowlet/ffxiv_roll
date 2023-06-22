<script lang="ts">
    import { slide } from 'svelte/transition';
	export let title: string;
	export let link: string | undefined;
	export let way : string;
	let innerWidth = 0;

	function convertToEmbeddedURL(url: string): string {
		const regExp =
			/^(?:https?:\/\/)?(?:www\.)?(?:(?:youtube.com\/(?:(?:watch\?v=)|(?:embed\/))([a-zA-Z0-9-]{11}))|(?:youtu.be\/([a-zA-Z0-9-]{11})))/;
		const match = url.match(regExp);
		const videoId = match ? match[1] || match[2] : undefined;
		if (videoId) {
			return `https://www.youtube.com/embed/${videoId}`;
		}
		return url;
	}
</script>

<svelte:window bind:innerWidth />

<li transition:slide class="flex flex-col justify-center items-center p-3 border-b text-sm border-slate-200 dark:border-gray-600" >
	<div class="whitespace-pre-wrap mt-1 mb-3">
		<span class="font-bold">입수 방법: </span> {way}
	</div>
	{#if link}
		<iframe
			width="{innerWidth < 560? innerWidth : 560}"
			height="315"
			src={convertToEmbeddedURL(link)}
			title={title}
			frameborder="0"
			allow="web-share"
			allowfullscreen
		/>
	{:else}
		영상이 존재하지 않습니다.
	{/if}
</li>
