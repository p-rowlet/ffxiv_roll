<script lang="ts">
    export let id: number;
    export let ver: number;
    export let title: string;
    export let description: string;
    export let way: string;
    export let listId : number;

</script>

<li class="grid grid-cols-roll gap-4 py-2 border-b boder-gray-400 text-center text-sm cursor-pointer hover:bg-slate-100">
    <div>
        {id - listId}
    </div>
    <div>
        {ver}
    </div>
    <div class="whitespace-pre-wrap">
        {title}
    </div>
    <div class="whitespace-pre-wrap">
        {description}
    </div>
    <div class="whitespace-pre-wrap text-left">
        {way}
    </div>
</li>