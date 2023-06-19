import { writable } from 'svelte/store';

export const currentTab = writable({
    name : "all",
    tabname : "전체",
    id : 0
});