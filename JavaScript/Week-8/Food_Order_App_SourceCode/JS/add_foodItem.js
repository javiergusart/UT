document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("foodItemForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Collect and validate data
    const name = document.getElementById("fname").value.trim();
    const description = document.getElementById("desc").value.trim();
    const inStock = document.getElementById("instock").checked ? "Yes" : "No";
    const isVeg = document.getElementById("isVeg").checked ? "Yes" : "No";
    const category = document.getElementById("category").value;
    const cuisine = document.getElementById("cuisine").value;
    const foodImage = document.getElementById("foodimg").value.trim();
    if (!name || !category || !cuisine) {
      alert("Food item name, category, and cuisine are required.");
      return;
    }
    const data = {
      name,
      description,
      inStock,
      isVeg,
      category,
      cuisine,
      foodImage,
    };
    fetch("http://localhost:3000/foodItems", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add food item");
        form.reset();
        window.location.href = "./list_fooditems.html";
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  });
});
