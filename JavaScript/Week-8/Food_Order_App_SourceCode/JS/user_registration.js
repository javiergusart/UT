document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registerForm");
  const message = document.getElementById("message");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const fullname = document.getElementById("fullname").value.trim();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    if (password !== confirmPassword) {
      message.textContent = "Password does not match. Re-enter the password.";
      return;
    }
    // Store user in localStorage
    const user = { fullname, username, email, contact, password };
    localStorage.setItem("user", JSON.stringify(user));
    form.reset();
    window.location.href = "./sign-in.html";
  });
});
