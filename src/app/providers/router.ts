import { createRouter, createWebHistory } from "vue-router";
import FormPage from "@/pages/form/index.vue";
import ResultPage from "@/pages/result/index.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: FormPage },
        { path: "/result", component: ResultPage }
    ]
});