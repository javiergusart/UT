const form = document.getElementById("foodItemForm");
const nameInput = document.getElementById("fname");
const descInput = document.getElementById("desc");
const inStockInput = document.getElementById("instock");
const isVegInput = document.getElementById("isVeg");
const categoryInput = document.getElementById("category");
const cuisineInput = document.getElementById("cuisine");
const foodImageInput = document.getElementById("foodimg");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (categoryInput.value === "" || cuisineInput.value === "") {
    alert("Please fill in both Category and Cuisine fields");
    return;
  }

  const newFoodItem = {
    name: nameInput.value,
    description: descInput.value,
    inStock: inStockInput.checked,
    isVeg: isVegInput.checked,
    category: categoryInput.value,
    cuisine: cuisineInput.value,
    foodImage: foodImageInput.value,
  };

  form.reset();

  const queryString = new URLSearchParams(newFoodItem).toString();

  window.location.href = `list_fooditems.html?${queryString}`;
});
