const form = document.querySelector("form");
const usernameInput = document.getElementById("userName");
const passwordInput = document.getElementById("password");
const messageElement = document.getElementById("message");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const enteredUsername = usernameInput.value;
  const enteredPassword = passwordInput.value;

  if (enteredUsername === "great" && enteredPassword === "learning") {
    messageElement.textContent = "Login successful!";
    messageElement.style.color = "green";
    window.location.replace("./html/index.html");
  } else {
    messageElement.textContent =
      "Invalid username or password. Please try again.";
    messageElement.style.color = "red";
    passwordInput.value = "";
  }
});
