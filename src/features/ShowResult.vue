<script setup lang="ts">
import { useAppStore } from "@/app/providers/store.ts";
import {Table} from "@/shared/ui";

const appStore = useAppStore();
const headers = ["Город", "Цех", "Сотрудник", "бригада", "смена"]
</script>

<template>
  <Table :list="appStore.list" :headers="headers"/>
</template>