var list_products = [
  {
    pname: "Foldsack Backpack",
    price: 109.95,
    units: 10,
    desc: "Everyday bag with padded sleeved for Laptop",
    inStock: "Yes",
    category: "Bags",
    prodimg: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  },
  {
    pname: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    units: 20,
    desc: "men's clothing",
    inStock: "Yes",
    category: "Clothing",
    prodimg:
      "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
  },
  {
    pname: "Silver Dragon Bracelet",
    price: 695,
    units: 30,
    desc: "Ocean pearl bracelet.",
    inStock: "Yes",
    category: "Others",
    prodimg: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
  },
];

function loadProducts() {
  list_products.forEach((p, index) => {
    addProduct(p, index + 1);
  });
}
// Function to add one product to the table inside tbody
function addProduct(product, serialNumber) {
  const pBody = document.querySelector("tbody");
  const tRow = document.createElement("tr");

  tRow.innerHTML += `
        <td>${serialNumber}</td>
        <td>${product.pname}</td>
        <td>${product.price}</td>
        <td>${product.desc}</td>
        <td>${product.units}</td>
        <td>${product.category}</td>
        <td>${product.inStock}</td>
    `;

  const tRowImg = `
        <td>
             <img id="tRowImg" src="${product.prodimg}" alt="Product Img" width="100">
        </td>
    `;
  const tRowBtn = `
        <td>
             <button>Edit</button>
        </td>
    `;

  tRow.innerHTML += tRowImg;
  tRow.innerHTML += tRowBtn;

  pBody.appendChild(tRow);
}

// on window load then load all products
loadProducts();
