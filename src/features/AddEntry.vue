<template>
  <div class="flex gap-4">
    <Selects :newItem="newItem"/>
    <button class="bg-emerald-800 text-white rounded-[10px] p-[5px_10px] self-end" @click="save">Сохранить</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAppStore } from "@/app/providers/store.ts";
import Selects from "@/entities/Selects.vue";
import {router} from "@/app/providers/router.ts";

const appStore = useAppStore();
const newItem = ref({
  city: "",
  workshop: "",
  employee: "",
  brigade: "",
  shift: "",
});

const save = () => {
  if (Object.values(newItem.value).every(value => value !== "")) {
    appStore.addItem(newItem.value);
    router.push('/result')
  } else {
    alert("Нужно выбрать все поля!");
  }
};
</script>