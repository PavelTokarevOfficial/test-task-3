<template>
  <div class="max-w-[600px] rounded-[10px] overflow-hidden border-1 border-amber-500">

    <div class="grid grid-cols-5 gap-4 border-b-1 border-amber-500 bg-amber-200">
      <div
          v-for="item in headers"
          class="grid place-content-center p-[10px_5px]"
      >
        {{ item }}
      </div>
    </div>

    <div v-if="list.length < 1" class="text-center py-[40px]">Пока ничего нет</div>

    <div
        v-for="(item, index) in list" :key="index"
        class="grid grid-cols-5 gap-4"
        :class="index % 2 === 0 ? 'bg-amber-100' : '' "
    >
      <div
          v-for="col in Object.values(item)"
          :key="col"
          class="grid place-content-center p-[10px_5px]"
      >
        {{col}}
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import type {TListItem} from "@/shared/types/index.ts";

defineProps<{
  list:TListItem[]
  headers: string[]
}>()
</script>