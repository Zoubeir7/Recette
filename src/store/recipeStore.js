import { defineStore } from "pinia";
import { reactive, ref } from "vue";

export const useRecipeStore = defineStore("RecipeStore", () => {
  //variables
  const recipes = reactive([
    {
      id: 1,
      title: "Salade de Quinoa",
      type: "Entrée",
      ingredients: [
        "Quinoa",
        "Tomates cerises",
        "Concombre",
        "Feta",
        "Olives noires",
        "Vinaigrette"
      ]
    },
    {
      id: 2,
      title: "Poulet au Curry",
      type: "Plat Principal ",
      ingredients: [
        "Poulet",
        "Pâte de curry",
        "Lait de coco",
        "Oignons",
        "Poivrons",
        "Riz basmati"
      ]
    }, {
      id: 3,
      title: "Soupe à l'Oignon",
      type: "Entrée",
      ingredients: [
        "Oignons",
        "Bouillon de bœuf",
        "Beurre",
        "Pain grillé",
        "Gruyère râpé",
      ],
    },
  ]);
  const val = ref(0);
  const newRecipe = ref({
    title: "",
    type: "",
    ingredients: [],
  });

  //Functions
  const del = (id) => {
    recipes.splice(id, 1);
  };
  const get = (index) => {
    val.value = index;
    newRecipe.value = recipes[index];
  };
  const edit = (index) => {
    recipes[index].id = index + 1;
    recipes[index].title = newRecipe.value.title;
    recipes[index].type = newRecipe.value.type;
    recipes[index].ingredients = newRecipe.value.ingredients.split(",");
  };
  const add = (newRecipe) => {
    recipes.push({
      id: recipes.length + 1,
      title: newRecipe.title,
      type: newRecipe.type,
      ingredients: newRecipe.ingredients.split(","),
    });
  };
  return { recipes, val, newRecipe, del, get, edit, add };
});
