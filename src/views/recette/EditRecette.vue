<script setup>
import { useRecipeStore } from "@store/recipeStore";
import { useRouter } from "vue-router";
const route = useRouter();
const store = useRecipeStore();
const val = store.val;
const recipes = store.recipes;
const newRecipe = store.newRecipe;
</script>

<template>
  <div class="container mt-5">
    <div class="p-4 bg-light rounded shadow-sm">
      <!-- Champ Titre -->
      <div class="input-group mb-4">
        <span class="input-group-text bg-warning text-dark fw-bold">
          <i class="fas fa-pen"></i>&nbsp;Titre
        </span>
        <input type="text" class="form-control" placeholder="Titre de la recette" v-model="newRecipe.title" />
      </div>

      <!-- Sélection Type -->
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

      <!-- Champ Ingrédients -->
      <div class="input-group mb-4">
        <span class="input-group-text bg-warning text-dark fw-bold">
          <i class="fas fa-carrot"></i>&nbsp;Ingrédients
        </span>
        <input type="text" class="form-control" placeholder="Liste des ingrédients" v-model="newRecipe.ingredients" />
      </div>

      <!-- Bouton Enregistrer -->
      <button class="btn btn-warning w-100 fw-bold" @click="store.edit(newRecipe); route.push({ name: 'recette' })">
        <i class="fas fa-save"></i> Enregistrer
      </button>
    </div>
  </div>
</template>


<style></style>