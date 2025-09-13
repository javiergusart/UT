// Function to load all products into the table
let list_products;

async function loadAllProducts() {
    list_products = await fetch("http://localhost:3000/products")
        .then(response => response.json())
        .catch(error => console.log(error.message))

    for (var i = 0; i < list_products.length; i++) {
        var product = list_products[i]
        addProduct(product, i + 1)
    }
}

// Function to add one product to the table
function addProduct(newProduct, Number) {
    var productItems = document.getElementById("productItemsTable")
    var body = document.querySelector("tbody")

    row = document.createElement("tr")

    row.innerHTML += `
    <td>${Number}</td>
    <td>${newProduct.name}</td>
    <td>${newProduct.price}</td>
    <td>${newProduct.description}</td>
    <td>${newProduct.quantity}</td>
    <td>${newProduct.category}</td>
    <td>${newProduct.isAvailable}</td>
    `
    row.innerHTML += newProduct.image != "" ? `<td><img src="${newProduct.image}"alt="Product Image" width="50" height="50"></td>`
        : `<td><img src="" /></td>`;
    row.innerHTML += `<td><button class="btn edit-btn table-btn">Edit</button></td>`

    body.appendChild(row)
    productItems.appendChild(body)
    console.log("Product item added successfully")
}


async function initialize() {
    await loadAllProducts()
}

initialize()

// // Function to add new food Item
// function addNewProduct() {
//     var params = new URLSearchParams(window.location.search);

//     if (params.size > 0) {
//         // Convert to object
//         var product = Object.fromEntries(params.entries());
//         list_products.push(product)
//         addProduct(product, list_products.length)
//         console.log(product);
//     }
// }
