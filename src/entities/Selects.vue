<template>
  <Select label="Город" v-model="selectValues.selectedCity" :options="convertToSelectOptions(CITIES)"/>
  <Select label="Цех" v-model="selectValues.selectedWorkshop" :options="selectValues.selectedCity ? convertToSelectOptions(filteredDepartments()) : []"/>
  <Select label="Сотрудник" v-model="selectValues.selectedEmployee" :options="selectValues.selectedWorkshop ? convertToSelectOptions(filteredEmployees()) : []"/>
  <Select label="Бригада" v-model="selectValues.selectedBrigade" :options="selectValues.selectedWorkshop ? convertToSelectOptions(TEAMS) : []"/>
  <Select label="Смена" v-model="selectValues.selectedShift" :options="selectValues.selectedWorkshop ? convertToSelectOptions(SHIFTS) : []"/>
</template>

<script setup lang="ts">
import {reactive, watch} from "vue";
import {CITIES, DEPARTMENTS, EMPLOYEES, SHIFTS, TEAMS} from "@/shared/constants/index.ts";
import {Select} from "@/shared/ui";

const props = defineProps(["selectedValues"]);

const selectValues = reactive({
  selectedCity: "",
  selectedWorkshop: "",
  selectedEmployee: "",
  selectedBrigade: "",
  selectedShift: ""
});

const filteredDepartments = () => DEPARTMENTS.filter(({cityId}) => cityId === selectValues.selectedCity);
const filteredEmployees = () => EMPLOYEES.filter(({departmentId}) => departmentId === selectValues.selectedWorkshop);

const convertToSelectOptions = (list: { id: string; name: string }[]) =>
    list.map(({id, name}) => ({value: id, label: name}));

watch(() => selectValues, () => {
  props.selectedValues.city = selectValues.selectedCity;
  props.selectedValues.workshop = selectValues.selectedWorkshop;
  props.selectedValues.employee = selectValues.selectedEmployee;
  props.selectedValues.brigade = selectValues.selectedBrigade;
  props.selectedValues.shift = selectValues.selectedShift;
}, {deep: true});
</script>