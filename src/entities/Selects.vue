<template>
  <Select label="Город" v-model="selectedCity" :options="convertToSelectOptions(CITIES)" />
  <Select label="Цех" v-model="selectedWorkshop" :options="selectedCity ? convertToSelectOptions(filteredDepartments()) : []" />
  <Select label="Сотрудник" v-model="selectedEmployee" :options="selectedWorkshop ? convertToSelectOptions(filteredEmployees()) : []" />
  <Select label="Бригада" v-model="selectedBrigade" :options="selectedWorkshop ? convertToSelectOptions(TEAMS) : []" />
  <Select  label="Смена" v-model="selectedShift" :options="selectedWorkshop ? convertToSelectOptions(SHIFTS) : []" />
</template>

<script setup lang="ts">
import { ref, watch, defineProps } from "vue";
import { CITIES, DEPARTMENTS, EMPLOYEES, SHIFTS, TEAMS } from "@/shared/constants/constants.ts";
import { Select } from "@/shared/ui";

const props = defineProps(["newItem"]);

const selectedCity = ref("");
const selectedWorkshop = ref("");
const selectedEmployee = ref("");
const selectedBrigade = ref("");
const selectedShift = ref("");

const filteredDepartments = () => DEPARTMENTS.filter(({ cityId }) => cityId === selectedCity.value);
const filteredEmployees = () => EMPLOYEES.filter(({ departmentId }) => departmentId === selectedWorkshop.value);

const convertToSelectOptions = (list: { id: string; name: string }[]) =>
    list.map(({ id, name }) => ({ value: id, label: name }));

watch([selectedCity, selectedWorkshop, selectedEmployee, selectedBrigade, selectedShift], () => {
  props.newItem.city = selectedCity.value;
  props.newItem.workshop = selectedWorkshop.value;
  props.newItem.employee = selectedEmployee.value;
  props.newItem.brigade = selectedBrigade.value;
  props.newItem.shift = selectedShift.value;
}, { deep: true });
</script>