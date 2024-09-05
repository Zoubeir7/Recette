<script setup>
import { useRouter } from "vue-router";
const route = useRouter();
</script>

<template>
  <header class="container-fluid navbar navbar-expand-lg navbar-dark bg-warning">
    <nav class="container">
      <a class="navbar-brand d-flex align-items-center text-dark" @click="route.push({ name: 'home' })">
        <i class="fas fa-utensils me-2"></i> CuisineZu
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">

          <li class="nav-item">
            <button class="btn btn-outline-dark me-2" @click="route.push({ name: 'recette' })">
              Recettes
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
  <div class="container mt-4">
    <router-view />
  </div>
</template>


<style scoped>
a {
  cursor: pointer;
}
</style>
