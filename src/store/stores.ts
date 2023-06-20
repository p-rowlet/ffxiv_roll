import { writable } from 'svelte/store';

export const currentTab = writable({
    name : "all",
    tabname : "전체",
    id : 0
});

export const searchText = writable({
    search : false,
    text : ""
});

export const theme = writable("light");