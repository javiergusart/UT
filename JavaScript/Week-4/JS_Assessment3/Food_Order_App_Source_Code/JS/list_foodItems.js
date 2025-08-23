var list_fooditems = [
  {
    name: "Veg Pizza",
    description: "Veggies include onion, tomato, capsicum etc",
    inStock: "Yes",
    isVeg: "Yes",
    category: "Pizza",
    cuisine: "Italian",
    foodImage:
      "https://www.themealdb.com//images//media//meals//x0lk931587671540.jpg",
  },
  {
    name: "Hot and Sour Soup",
    description: "Made with mushrooms, tofu, spring onions and chicken",
    inStock: "Yes",
    isVeg: "No",
    category: "Soup",
    cuisine: "Chinese",
    foodImage: "https://www.themealdb.com/images/media/meals/1529445893.jpg",
  },
  {
    name: "Lasagna Sandwich",
    description: "Bacon, sour cream, mozzarella cheese and white bread",
    inStock: "Yes",
    isVeg: "No",
    category: "Sandwich",
    cuisine: "Italian",
    foodImage:
      "https://www.themealdb.com/images/media/meals/xr0n4r1576788363.jpg",
  },
  {
    name: "Chick-Fil-A-Sandwich",
    description: "Chicken pattice, Egg, Milk &amp; Burger bun",
    inStock: "Yes",
    isVeg: "No",
    category: "Sandwich",
    cuisine: "Asian",
    foodImage:
      "https://www.themealdb.com/images/media/meals/sbx7n71587673021.jpg",
  },
  {
    name: "Grilled Mac and Cheese Sandwich",
    description:
      "Macaroni, Cheddar cheese, Jack cheese, Heavy cream &amp; white bread.",
    inStock: "Yes",
    isVeg: "Yes",
    category: "Sandwich",
    cuisine: "Asian",
    foodImage:
      "https://www.themealdb.com/images/media/meals/xutquv1505330523.jpg",
  },
  {
    name: "Italian Pasta Salad",
    description: "Farfalle, olives, basil, cherry tomatoes, mozzarella cheese",
    inStock: "Yes",
    isVeg: "Yes",
    category: "Pasta",
    cuisine: "Italian",
    foodImage:
      "https://www.themealdb.com/images/media/meals/wvqpwt1468339226.jpg",
  },
  {
    name: "Creamy Tomato Soup",
    description:
      "Onion, tomatoes, celery leaves, vegetable stock, tomato puree, milk",
    inStock: "Yes",
    isVeg: "Yes",
    category: "Soup",
    cuisine: "Asian",
    foodImage:
      "https://www.themealdb.com/images/media/meals/stpuws1511191310.jpg",
  },
];

function addFoodItem(foodItemObject, number) {
  const tbody = document.querySelector("#foodItemsTable tbody");
  const row = document.createElement("tr");

  row.innerHTML = `
        <td>${number}</td>
        <td>${foodItemObject.name}</td>
        <td>${foodItemObject.description}</td>
        <td>${foodItemObject.inStock}</td>
        <td>${foodItemObject.isVeg}</td>
        <td>${foodItemObject.category}</td>
        <td>${foodItemObject.cuisine}</td>
        <td><img src="${foodItemObject.foodImage}" width="100px"></td>
        <td><button class="btn">Edit</button></td>
    `;

  tbody.appendChild(row);
}

function loadAllFoodItems() {
  for (let i = 0; i < list_fooditems.length; i++) {
    addFoodItem(list_fooditems[i], i + 1);
  }
}

const urlParams = new URLSearchParams(window.location.search);
const newFoodItemFromURL = {};

for (let [key, value] of urlParams) {
  newFoodItemFromURL[key] = value;
}

if (Object.keys(newFoodItemFromURL).length > 0) {
  if (newFoodItemFromURL.inStock === "true") {
    newFoodItemFromURL.inStock = "Yes";
  } else {
    newFoodItemFromURL.inStock = "No";
  }

  if (newFoodItemFromURL.isVeg === "true") {
    newFoodItemFromURL.isVeg = "Yes";
  } else {
    newFoodItemFromURL.isVeg = "No";
  }

  list_fooditems.push(newFoodItemFromURL);
}

loadAllFoodItems();
