const recipes = [
  {
    title: "Spaghetti Bolognese",
    ingredients: "spaghetti, minced meat, tomato sauce, onion, garlic",
    instructions: "Boil spaghetti, Brown minced meat, Add sauce, Mix together",
  },
  {
    title: "Chicken Curry",
    ingredients: "chicken, curry powder, coconut milk, onion, garlic",
    instructions:
      "Brown chicken, Add onion and garlic, Stir in curry powder, Add coconut milk, Simmer",
  },
];

let editingIndex = -1;

function displayRecipes() {
  const recipesContainer = document.getElementById("recipes");
  recipesContainer.innerHTML = "";

  if (recipes.length === 0) {
    recipesContainer.innerHTML =
      '<div class="empty-state">No recipes yet. Add your first recipe above!</div>';
    return;
  }

  recipes.forEach((recipe, index) => {
    const recipeCard = document.createElement("div");
    recipeCard.className = "recipe-card";

    const ingredientsList = recipe.ingredients
      .split(",")
      .map((ingredient) => `<li>${ingredient.trim()}</li>`)
      .join("");

    const instructionsList = recipe.instructions
      .split(",")
      .map((instruction) => `<li>${instruction.trim()}</li>`)
      .join("");

    recipeCard.innerHTML = `
            <h3 class="recipe-title">${recipe.title}</h3>
            <div class="recipe-section">
                <h4>Ingredients:</h4>
                <ul class="ingredients-list">
                    ${ingredientsList}
                </ul>
            </div>
            <div class="recipe-section">
                <h4>Instructions:</h4>
                <ol class="instructions-list">
                    ${instructionsList}
                </ol>
            </div>
            <div class="recipe-actions">
                <button class="btn btn-edit" onclick="editRecipe(${index})">Edit</button>
                <button class="btn btn-delete" onclick="deleteRecipe(${index})">Delete</button>
            </div>
        `;

    recipesContainer.appendChild(recipeCard);
  });
}

function addRecipe(recipeObject) {
  if (
    !recipeObject.title ||
    !recipeObject.ingredients ||
    !recipeObject.instructions
  ) {
    alert("Please fill in all input fields");
    return;
  }
  recipes.push(recipeObject);
}

function resetForm() {
  document.getElementById("add-recipe-form").reset();
  editingIndex = -1;
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.textContent = "Add Recipe";
}

function deleteRecipe(index) {
  if (confirm("Are you sure you want to delete this recipe?")) {
    recipes.splice(index, 1);
    displayRecipes();
  }
}

function editRecipe(index) {
  const recipe = recipes[index];
  document.getElementById("title").value = recipe.title;
  document.getElementById("ingredients").value = recipe.ingredients;
  document.getElementById("instructions").value = recipe.instructions;

  editingIndex = index;
  const submitButton = document.querySelector('button[type="submit"]');
  submitButton.textContent = "Save Recipe";
}

document
  .getElementById("add-recipe-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value.trim();
    const ingredients = document.getElementById("ingredients").value.trim();
    const instructions = document.getElementById("instructions").value.trim();

    const recipeObject = {
      title: title,
      ingredients: ingredients,
      instructions: instructions,
    };

    if (editingIndex >= 0) {
      if (
        !recipeObject.title ||
        !recipeObject.ingredients ||
        !recipeObject.instructions
      ) {
        alert("Please fill in all input fields");
        return;
      }
      recipes[editingIndex] = recipeObject;
    } else {
      addRecipe(recipeObject);
    }

    displayRecipes();
    resetForm();
  });

displayRecipes();
