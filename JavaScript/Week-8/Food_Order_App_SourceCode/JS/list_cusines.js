document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/cuisines")
    .then((response) => response.json())
    .then((cuisines) => {
      const tbody = document.querySelector("#cusineTable tbody");
      tbody.innerHTML = "";
      cuisines.forEach((cuisine, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${idx + 1}</td>
          <td>${cuisine.name}</td>
          <td>${cuisine.description}</td>
          <td>${cuisine.active}</td>
          <td><img src="${cuisine.image}" width="80px" height="80px"></td>
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
      console.error("Failed to fetch cuisines:", err);
    });
});
