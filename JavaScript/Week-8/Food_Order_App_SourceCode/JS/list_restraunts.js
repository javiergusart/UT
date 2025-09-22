document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/restaurants")
    .then((response) => response.json())
    .then((restaurants) => {
      const tbody = document.querySelector("#restaurantsTable tbody");
      tbody.innerHTML = "";
      restaurants.forEach((rest, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${idx + 1}</td>
          <td>${rest.name}</td>
          <td><img src="${rest.image}" width="80px" height="80px"></td>
          <td>${rest.address}</td>
          <td>${rest.contact}</td>
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
      console.error("Failed to fetch restaurants:", err);
    });
});
