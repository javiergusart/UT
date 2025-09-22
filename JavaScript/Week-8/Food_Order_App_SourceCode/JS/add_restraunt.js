document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("restrauntForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Collect and validate data
    const name = document.getElementById("restaurant").value.trim();
    const address = document.getElementById("addr").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const image = document.getElementById("pic").value.trim();
    if (!name || !address || !contact) {
      alert("Restaurant name, address, and contact are required.");
      return;
    }
    const data = {
      name,
      address,
      contact,
      image,
    };
    fetch("http://localhost:3000/restaurants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add restaurant");
        form.reset();
        window.location.href = "./list_restaurants.html";
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  });
});
