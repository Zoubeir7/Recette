import { createRouter, createWebHistory } from "vue-router";

import Home from "@views/Home.vue";
import ListRecette from "@views/recette/ListRecette.vue";
import AddRecette from "@views/recette/AddRecette.vue";
import EditRecette from "@views/recette/EditRecette.vue";
import ShowRecette from "@views/recette/ShowRecette.vue";
import NotFound from "@views/NotFound.vue";


const routes = [
    {
        path: "/",
        name: "home",
        component: Home
    },
    {
        path: "/recette",
        name: "recette",
        component: ListRecette
    },
    {
        path: "/recette/show/:id",
        name: "recette-show",
        component: ShowRecette
    },
    {
        path: "/recette/new",
        name: "recette-add",
        component: AddRecette
    },
    {
        path: "/recette/edit/:id",
        name: "recette-edit",
        component: EditRecette
    },
    { path: "/:pathMatch(.*)*", component: NotFound },
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
});

export default router;