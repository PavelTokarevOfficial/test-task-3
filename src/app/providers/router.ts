import { createRouter, createWebHistory } from "vue-router";
import FormPage from "@/pages/form/Index.vue";
import ResultPage from "@/pages/result/Index.vue";

export const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: "/", component: FormPage },
        { path: "/result", component: ResultPage }
    ]
});