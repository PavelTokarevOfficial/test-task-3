<template>
  <Header/>
  <main class="container mx-[auto] px-[10px]">
    <RouterView/>
  </main>
</template>

<script setup lang="ts">
import {Header} from '@/widgets/index.ts'
</script>