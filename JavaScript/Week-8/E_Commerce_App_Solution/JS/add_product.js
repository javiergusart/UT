
var form = document.getElementById("productForm");

if (form) {
    form.addEventListener("submit", async function (event) {
        
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

        // Create a new product object
        var newProduct = {
            name: name,
            price: price,
            quantity: units,
            description: desc,
            isAvailable: inStock,
            category: category,
            image: prodimg
        };

        
        try {
        // Add new product to JSON file
        const response = await fetch("http://localhost:3000/products", 
            {
                method: 'POST',
                body: JSON.stringify(newProduct) // Convert the product object to a JSON string
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json(); // Handle response
        console.log(result.message);


        // Get the form element and reset it
        form.reset();

        window.location.href = "./list_products.html";
    }
    catch (error) {
        console.error("Error adding product:", error.message);
        alert("Failed to add product. Please try again.");
    }
    });
}