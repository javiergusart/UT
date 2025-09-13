// Function to load all products into the table
let list_categories;

async function loadAllCategories() {
    list_categories = await fetch("http://localhost:3000/categories")
        .then(response => response.json())
        .catch(error => console.log(error.message))

    for (var i = 0; i < list_categories.length; i++) {
        var category = list_categories[i]
        addCategory(category, i + 1)
    }
}

// Function to add one category to the table
function addCategory(newCategory, Number) {
    var categoriesTable = document.getElementById("categoriesTable")
    var body = document.querySelector("tbody")

    row = document.createElement("tr")

    row.innerHTML += `
    <td>${Number}</td>
    <td>${newCategory.name}</td>
    <td>${newCategory.description}</td>
    <td>${newCategory.isActive}</td>
    <td><button class="btn edit-btn table-btn">Edit</button></td>
    `

    body.appendChild(row)
    categoriesTable.appendChild(body)
    console.log("Category added successfully")
}

async function initialize() {
    await loadAllCategories()
}

initialize()
