
var form = document.getElementById("productForm");

if (form) {
    form.addEventListener("submit", function (event) {
        
        event.preventDefault(); // Prevent the default form submission
        // console.log("Form on hold");

        // Get the values from the input fields
        var name = document.getElementById("pname").value;
        var price = document.getElementById("price").value;
        var units = document.getElementById("units").value;
        var desc = document.getElementById("desc").value;
        var inStock = document.getElementById("instock").checked ? "Yes" : "No";
        var category = document.getElementById("category").value;
        var prodimg = document.getElementById("prodimg").value;

        if (category === "") {
            alert("Please select a valid category option.");
            return;
        }

        // Create a new food item object
        var newProduct = {
            pname: name,
            price: price,
            units: units,
            desc: desc,
            inStock: inStock,
            category: category,
            prodimg: prodimg
        };

        console.log("Prouct data: "+newProduct);
        // Get the form element and reset it
        form.reset();

        var queryString = new URLSearchParams(newProduct).toString();
        window.location.href = "./list_products.html?" + queryString; // Redirect to the list page
    });
}