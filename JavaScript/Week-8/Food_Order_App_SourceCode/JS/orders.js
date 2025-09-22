document.addEventListener("DOMContentLoaded", function () {
  fetch("http://localhost:3000/orders")
    .then((response) => response.json())
    .then((orders) => {
      const tbody = document.querySelector("#OrdersTable tbody");
      tbody.innerHTML = "";
      orders.forEach((order, idx) => {
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${idx + 1}</td>
          <td>${order.orderId}</td>
          <td>${order.date}</td>
          <td>${order.status}</td>
          <td>${order.amount}</td>
          <td><button class="btn">Edit</button></td>
          <td><button class="btn">View</button></td>
          <td><button class="btn">Update Status</button></td>
          <td>${order.userId}</td>
        `;
        tbody.appendChild(tr);
      });
    })
    .catch((err) => {
      console.error("Failed to fetch orders:", err);
    });
});
