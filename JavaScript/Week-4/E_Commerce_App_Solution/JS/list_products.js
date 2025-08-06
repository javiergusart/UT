var list_products = [
    {
        pname: "Foldsack Backpack",
        price: 109.95,
        units: 10,
        desc: "Everyday bag with padded sleeved for Laptop",
        inStock: "Yes",
        category: "Bags",
        prodimg: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
    },
    {
        pname: "Mens Casual Premium Slim Fit T-Shirts",
        price: 22.3,
        units: 20,
        desc: "men's clothing",
        inStock: "Yes",
        category: "Clothing",
        prodimg: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
    },
    {
        pname: "Silver Dragon Bracelet",
        price: 695,
        units: 30,
        desc: "Ocean pearl bracelet.",
        inStock: "Yes",
        category: "Others",
        prodimg: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg"
    }
];

// Function to load all products into the table
function loadAllProducts() {
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
    <td>${newProduct.pname}</td>
    <td>${newProduct.price}</td>
    <td>${newProduct.desc}</td>
    <td>${newProduct.units}</td>
    <td>${newProduct.category}</td>
    <td>${newProduct.inStock}</td>
    `
    row.innerHTML += newProduct.prodimg != "" ? `<td><img src="${newProduct.prodimg}"alt="Product Image" width="50" height="50"></td>`
        : `<td><img src="" /></td>`;
    row.innerHTML += `<td><button class="btn edit-btn table-btn">Edit</button></td>`

    body.appendChild(row)
    productItems.appendChild(body)
    console.log("Product item added successfully")
}

// Function to add new food Item
function addNewProduct() {
    var params = new URLSearchParams(window.location.search);

    if (params.size > 0) {
        // Convert to object
        var product = Object.fromEntries(params.entries());
        list_products.push(product)
        addProduct(product, list_products.length)
        console.log(product);
    }
}

loadAllProducts()
addNewProduct()