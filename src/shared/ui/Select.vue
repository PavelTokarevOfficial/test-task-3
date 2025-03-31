<template>
  <div class="flex flex-col">
    <label v-if="label" class="mb-[10px] font-bold">{{ label }}</label>
    <select
        :value="modelValue"
        @change="$emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
        class="border-amber-300 border-2 p-[2px_5px] min-w-[150px] w-fit rounded-[10px]"
    >
      <option v-for="option in options" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
interface prodsSelect {
  label?: string;
  modelValue?: string;
  options: { value: string; label: string }[];
}

defineProps<prodsSelect>();

defineEmits(["update:modelValue"]);
</script>