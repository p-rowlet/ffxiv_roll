<script lang="ts">
    import { slide } from 'svelte/transition';
	export let title: string;
	export let link: string;

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

<li transition:slide class="flex justify-center p-3 border-b text-sm border-slate-200" >
	{#if link}
		<iframe
			width="560"
			height="315"
			src={convertToEmbeddedURL(link)}
			title={title}
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
			allowfullscreen
		/>
	{:else}
		영상이 존재하지 않습니다.
	{/if}
</li>
