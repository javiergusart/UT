document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/foodItems")
    .then((response) => response.json())
    .then((foodItems) => {
      const tbody = document.querySelector("#foodItemsTable tbody");
      tbody.innerHTML = "";
      foodItems.forEach((item, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${idx + 1}</td>
          <td>${item.name}</td>
          <td>${item.description}</td>
          <td>${item.inStock}</td>
          <td>${item.isVeg}</td>
          <td>${item.category}</td>
          <td>${item.cuisine}</td>
          <td><img src="${item.foodImage}" width="100px"></td>
          <td>
            <button class="btn">Edit</button>
            <button class="btn">View</button>
            <button class="btn">Update Status</button>
          </td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch((err) => {
      console.error("Failed to fetch food items:", err);
    });
});
