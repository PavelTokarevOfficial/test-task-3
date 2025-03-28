<template>
  <div class="flex gap-4">
    <UiSelect label="Город" v-model="selectedCity" :options="convertToSelectOptions(CITIES)" />

    <UiSelect v-if="selectedCity" label="Цех" v-model="selectedWorkshop" :options="convertToSelectOptions(filteredDepartments())" />

    <UiSelect v-if="selectedWorkshop" label="Сотрудник" v-model="selectedEmployee" :options="convertToSelectOptions(filteredEmployees())" />

    <UiSelect v-if="selectedWorkshop" label="Бригада" v-model="selectedBrigade" :options="convertToSelectOptions(TEAMS)" />

    <UiSelect v-if="selectedWorkshop" label="Смена" v-model="selectedShift" :options="convertToSelectOptions(SHIFTS)" />

    <button class="bg-emerald-800 text-white rounded-[10px] p-[5px_10px] self-end" @click="save">Сохранить</button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import UiSelect from "@/shared/Select/UiSelect.vue";
import { CITIES, DEPARTMENTS, EMPLOYEES, SHIFTS, TEAMS } from "@/shared/config/constants.ts";
import { useAppStore } from "@/app/providers/store.ts";
import {router} from "@/app/providers/router.ts";

const appStore = useAppStore();

const selectedCity = ref("");
const selectedWorkshop = ref("");
const selectedEmployee = ref("");
const selectedBrigade = ref("");
const selectedShift = ref("");

const filteredDepartments = () => DEPARTMENTS.filter(({ cityId }) => cityId === selectedCity.value);
const filteredEmployees = () => EMPLOYEES.filter(({ departmentId }) => departmentId === selectedWorkshop.value);

const convertToSelectOptions = (list: { id: string; name: string }[]) =>
    list.map(({ id, name }) => ({ value: id, label: name }));

const resetFields = () => {
  selectedCity.value = "";
  selectedWorkshop.value = "";
  selectedEmployee.value = "";
  selectedBrigade.value = "";
  selectedShift.value = "";
};

const save = () => {
  const fields = { selectedCity, selectedWorkshop, selectedEmployee, selectedBrigade, selectedShift };

  if (Object.values(fields).every(({ value }) => value !== "")) {
    const newItem = {
      city: selectedCity.value,
      workshop: selectedWorkshop.value,
      employee: selectedEmployee.value,
      brigade: selectedBrigade.value,
      shift: selectedShift.value,
    };

    appStore.addItem(newItem);
    resetFields();
    router.push('/result')
  } else {
    alert("Нужно выбрать все поля!");
  }
};

watch([selectedCity], () => {
  selectedWorkshop.value = "";
  selectedEmployee.value = "";
});

watch([selectedWorkshop], () => {
  selectedEmployee.value = "";
});
</script>