<script setup>
import { useRecipeStore } from "@store/recipeStore";
import { useRouter } from "vue-router";
const store = useRecipeStore();
const recipes = store.recipes;
const route = useRouter();

const destroy = (index) => {
  const confirm = window.confirm(
    `Vous êtes sûr de vouloir suprimé la recette ${recipes[index].title} ?`
  );
  if (confirm) {
    store.del(index);
  }
};
</script>
<template>
  <div class="container">
    <!-- Titre de la section -->
    <h1 class="mt-3 mb-4 text-center fw-bold">Mes Recettes</h1>

    <!-- Bouton pour ajouter une nouvelle recette -->
    <div class="d-flex justify-content-center align-items-center mb-4">
      <button class="btn btn-warning btn-lg mt-4 mb-2" @click="route.push({ name: 'recette-add' })">
        <i class="fas fa-plus me-2"></i> Nouvelle Recette
      </button>
    </div>

    <!-- Tableau des recettes -->
    <div class="table-responsive">
      <table class="table table-hover table-striped table-bordered shadow-sm">
        <thead class="bg-warning text-dark">
          <tr>
            <th scope="col" class="text-center">N°</th>
            <th scope="col" class="text-center">Titres</th>
            <th scope="col" class="text-center">Type</th>
            <th scope="col" class="text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          <!-- Message quand il n'y a aucune recette -->
          <tr v-if="recipes.length === 0">
            <td colspan="4" class="text-danger text-center fw-bold py-3">
              Aucune Recette Enregistrée
            </td>
          </tr>
          <!-- Liste des recettes -->
          <tr v-else v-for="(recipe, index) in recipes" :key="recipe.id">
            <td class="text-center">{{ recipe.id }}</td>
            <td class="text-center">{{ recipe.title }}</td>
            <td class="text-center">{{ recipe.type }}</td>
            <td class="text-center">
              <button class="btn btn-sm btn-outline-primary me-2" @click="
                store.get(index),
                route.push({ name: 'recette-show', params: { id: recipe.id } })
                ">
                <i class="fas fa-eye"></i>
              </button>
              <button class="btn btn-sm btn-outline-secondary me-2" @click="
                store.get(index),
                route.push({ name: 'recette-edit', params: { id: recipe.id } })
                ">
                <i class="fas fa-edit"></i>
              </button>
              <button class="btn btn-sm btn-outline-danger" @click="destroy(index)">
                <i class="fas fa-trash"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipes: [
        { id: 1, title: 'Salade César', type: 'Entrée' },
        { id: 2, title: 'Spaghetti Carbonara', type: 'Plat' },
        { id: 3, title: 'Tarte Tatin', type: 'Dessert' },
      ],
    };
  },
  methods: {
    route: {
      push(route) {
        this.$router.push(route);
      },
    },
    store: {
      get(index) {
        // Récupération de la recette par son index
        console.log('Recette récupérée:', this.recipes[index]);
      },
    },
    destroy(index) {
      // Suppression de la recette par son index
      this.recipes.splice(index, 1);
      console.log('Recette supprimée:', index);
    },
  },
};
</script>

<style scoped>
/* Stylisation du tableau */
.table {
  background-color: #fff;
  border-radius: 0.5rem;
  overflow: hidden;
}

.table thead {
  font-weight: bold;
  font-size: 1.1rem;
}

.table-hover tbody tr:hover {
  background-color: #ffe4b5;
  /* Couleur de survol */
}

.btn-outline-primary,
.btn-outline-secondary,
.btn-outline-danger {
  font-size: 0.9rem;
  padding: 0.3rem 0.6rem;
}

.btn-warning {
  color: #fff;
}

.table-responsive {
  border-radius: 0.5rem;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Ombre légère autour du tableau */
}
</style>
