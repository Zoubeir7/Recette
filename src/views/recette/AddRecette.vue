<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useRecipeStore } from "@store/recipeStore";
const route = useRouter();
const store = useRecipeStore();
const newRecipe = ref({
  title: "",
  type: "",
  ingredients: [],
});
</script>

<template>
  <div class="container mt-5">
    <h1 class="mb-4 text-center fw-bold text-warning">Ajouter une Nouvelle Recette</h1>
    <div class="p-4 bg-light rounded shadow-sm">
      <div class="input-group mb-4">
        <span class="input-group-text bg-warning text-dark fw-bold">
          <i class="fas fa-pen"></i>&nbsp;Titre
        </span>
        <input type="text" class="form-control" placeholder="Titre de la recette" v-model="newRecipe.title" />
      </div>
      <div class="input-group mb-4">
        <span class="input-group-text bg-warning text-dark fw-bold">
          <i class="fas fa-utensils"></i>&nbsp;Type
        </span>
        <select class="form-select" v-model="newRecipe.type">
          <option value="Entrée">Entrée</option>
          <option value="Plat">Plat Principal </option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <div class="input-group mb-4">
        <span class="input-group-text bg-warning text-dark fw-bold">
          <i class="fas fa-carrot"></i>&nbsp;Ingrédients
        </span>
        <input type="text" class="form-control" placeholder="Liste des ingrédients" v-model="newRecipe.ingredients" />
      </div>
      <button class="btn btn-warning w-100 fw-bold" @click="store.add(newRecipe); route.push({ name: 'recette' })">
        <i class="fas fa-save"></i> Enregistrer
      </button>
    </div>
  </div>
</template>

<style scoped></style>
