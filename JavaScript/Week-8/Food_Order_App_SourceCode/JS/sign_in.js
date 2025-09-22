document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const message = document.getElementById("message");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const username = document.getElementById("userName").value.trim();
    const password = document.getElementById("password").value;
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.username === username && user.password === password) {
      sessionStorage.setItem("loginStatus", "true");
      sessionStorage.setItem("userName", user.fullname);
      window.location.href = "html/index.html";
    } else {
      message.textContent =
        "Invalid credentials. Please register before Sign in.";
    }
  });
});
