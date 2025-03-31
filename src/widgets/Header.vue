<template>
  <header class="container m-[20px_auto] px-[10px]">
    <nav class="flex gap-[10px] p-[10px] bg-emerald-300 text-emerald-800 rounded-[10px]">
      <RouterLink
          v-for="item in links"
          :to="item.url"
          class="p-[5px_10px] rounded-[5px] transition duration-500 ease-in-out"
          active-class="bg-emerald-800 text-white">
        {{ item.name }}
      </RouterLink>
    </nav>
  </header>
</template>

<script setup lang="ts">

type link = {
  name: string,
  url: string
}

const links:link[] = [
  {
    name: "Форма",
    url: "/"
  },
  {
    name: "Список",
    url: "result"
  }
]

</script>