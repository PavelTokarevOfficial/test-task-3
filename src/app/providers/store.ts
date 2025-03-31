import {defineStore} from 'pinia'
import {type Ref, ref} from 'vue'
import type {TListItem} from "@/shared/types/index.ts";

export const useAppStore = defineStore('appStore', () => {
    const list: Ref<TListItem[]> = ref([]);

    const addItem = (item: TListItem) => {
        list.value?.push(item)
    }

    return {list, addItem}
})
