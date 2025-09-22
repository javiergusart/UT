document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cuisineForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    // Collect and validate data
    const name = document.getElementById("cuisine").value.trim();
    const description = document.getElementById("desc").value.trim();
    const image = document.getElementById("cuisineimg").value.trim();
    const active = document.getElementById("isActive").checked ? "Yes" : "No";
    if (!name || !image) {
      alert("Cuisine name and image URL are required.");
      return;
    }
    const data = {
      name,
      description,
      image,
      active,
    };
    fetch("http://localhost:3000/cuisines", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to add cuisine");
        form.reset();
        window.location.href = "./list_cuisines.html";
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  });
});
