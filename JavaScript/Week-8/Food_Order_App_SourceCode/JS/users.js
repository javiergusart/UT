document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((users) => {
      const tbody = document.querySelector("#usersTable tbody");
      tbody.innerHTML = "";
      users.forEach((user) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${user.userId}</td>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>${user.contact}</td>
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
      console.error("Failed to fetch users:", err);
    });
});
