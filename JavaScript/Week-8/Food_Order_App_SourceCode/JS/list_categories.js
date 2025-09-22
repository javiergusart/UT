document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/categories")
    .then((response) => response.json())
    .then((categories) => {
      const tbody = document.querySelector("#categoryTable tbody");
      tbody.innerHTML = "";
      categories.forEach((cat, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
                    <td>${idx + 1}</td>
                    <td>${cat.name}</td>
                    <td>${cat.description}</td>
                    <td>${cat.active}</td>
                    <td><img src="${cat.image}" width="100px"></td>
                    <td><button class="btn">Edit</button></td>
                `;
        tbody.appendChild(tr);
      });
    })
    .catch((err) => {
      console.error("Failed to fetch categories:", err);
    });
});
