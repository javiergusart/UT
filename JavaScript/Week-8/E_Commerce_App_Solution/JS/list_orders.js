// Function to load all products into the table
let list_orders;

async function loadAllOrders() {
    list_orders = await fetch("http://localhost:3000/orders")
        .then(response => response.json())
        .catch(error => console.log(error.message))

    for (var i = 0; i < list_orders.length; i++) {
        var order = list_orders[i]
        addOrder(order, i + 1)
    }
}

// Function to add one order to the table
function addOrder(newOrder, Number) {
    var categoriesTable = document.getElementById("ordersTable")
    var body = document.querySelector("tbody")

    row = document.createElement("tr")

    row.innerHTML += `
    <td>${Number}</td>
    <td>${newOrder.date}</td>
    <td>${newOrder.name}</td>
    <td>${newOrder.price}</td>
    <td>${newOrder.paymentStatus}</td>
    <td>${newOrder.orderStatus}</td>
    <td><a href="order_detail.html"><button class="table-btn">View Details</button></a></td>
    `

    body.appendChild(row)
    categoriesTable.appendChild(body)
    console.log("Orders added successfully")
}

async function initialize() {
    await loadAllOrders()
}

initialize()
