# CuisineZu

## Description
CuisineZu est une application web développée avec Vue.js, permettant aux utilisateurs de naviguer facilement entre les différentes pages, telles que l'Accueil et les Recettes. Elle est conçue avec un design responsive pour offrir une expérience utilisateur optimale sur divers appareils.

## Fonctionnalités

- **Ajout de recettes** : Les utilisateurs peuvent ajouter de nouvelles recettes en spécifiant le titre, les ingrédients et le type de recette (entrée, plat, dessert, etc.).
- **Modification de recettes** : Les recettes existantes peuvent être modifiées.
- **Suppression de recettes** : Les utilisateurs peuvent supprimer des recettes de la liste.
- **Affichage des recettes** : Une liste de toutes les recettes disponibles est affichée, avec la possibilité de voir les détails de chaque recette.

## Technologies Utilisées

- **Vue.js 3** avec la **Composition API**
- **Vue Router** pour la gestion de la navigation
- **Bootstrap 5** pour le design et la mise en page responsive


## Prérequis

- Node.js (version 14 ou supérieure)
- npm 
- Docker (pour la conteneurisation)

## Installation

1. Clonez le repository GitHub :

   ```bash
   https://github.com/Zoubeir7/Recette.git   
   ```

2. Accédez au répertoire du projet :
   ```bash
   cd recette
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```

## Utilisation

1. Pour démarrer l'application en mode développement :

   ```bash
   npm run serve
   ```

1. Pour exécuter le conteneur Docker :

   ```bash
   docker run -d -p 4000:81 recette
   ```

## Auteur

- [Zoubeir Ba](https://github.com/Zoubeir7) 
