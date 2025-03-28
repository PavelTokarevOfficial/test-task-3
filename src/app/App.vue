<template>
  <Header/>
  <main class="container mx-[auto] px-[10px]">
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import Header from '@/shared/Header/Header.vue'
</script>

<style scoped>

</style>
