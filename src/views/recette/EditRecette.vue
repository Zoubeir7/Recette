<script setup>
import { useRecipeStore } from "@store/recipeStore";
import { useRouter } from "vue-router";

const route = useRouter();
const store = useRecipeStore();
const newRecipe = store.newRecipe; // Référence de la nouvelle recette

// Fonction pour sauvegarder la recette modifiée
const saveRecipe = () => {
  const index = store.val; // Supposons que `val` contienne l'index de la recette actuelle à modifier
  store.edit(index); // Appel de la fonction `edit` avec l'index correct
  route.push({ name: 'recette' }); // Redirige après la sauvegarde
};
</script>

<template>
  <div class="container mt-5">
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
          <option value="Plat">Plat Principal</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>


      <div class="input-group mb-4">
        <span class="input-group-text bg-warning text-dark fw-bold">
          <i class="fas fa-carrot"></i>&nbsp;Ingrédients
        </span>
        <input type="text" class="form-control" placeholder="Liste des ingrédients (séparés par des virgules)"
          v-model="newRecipe.ingredients" />
      </div>


      <button class="btn btn-warning w-100 fw-bold" @click="saveRecipe">
        <i class="fas fa-save"></i> Enregistrer
      </button>
    </div>
  </div>
</template>

<style scoped></style>
