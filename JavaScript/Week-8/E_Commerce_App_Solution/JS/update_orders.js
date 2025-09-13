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
    var categoriesTable = document.getElementById("updateOrders")
    var body = document.querySelector("tbody")

    row = document.createElement("tr")

    row.innerHTML += `
    <td>${Number}</td>
    <td>${newOrder.date}</td>
    <td>${newOrder.name}</td>
    <td>${newOrder.price}</td>
    <td>${newOrder.paymentStatus}</td>
    <td>${newOrder.orderStatus}</td>
    <td><select>
        <option value="#" disabled selected>Update Order Status</option>
        <option value="Processing">Processing</option>
        <option value="In Shipment">In Shipment</option>
        <option value="Delivered">Delivered</option>
    </select></td>
    `

    body.appendChild(row)
    categoriesTable.appendChild(body)
    console.log("Orders added successfully")
}

async function initialize() {
    await loadAllOrders()
}

initialize()
