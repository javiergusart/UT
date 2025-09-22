document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("categoryForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Collect and validate data
    const name = document.getElementById("category").value.trim();
    const description = document.getElementById("desc").value.trim();
    const active = document.getElementById("isActive").checked ? "Yes" : "No";
    const image = document.getElementById("categoryimg").value.trim();
    if (!name || !image) {
      alert("Category name and image URL are required.");
      return;
    }
    const data = {
      name,
      description,
      active,
      image,
    };
    fetch("http://localhost:3000/categories", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add category");
        form.reset();
        window.location.href = "./list_categories.html";
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  });
});
