var userName = document.getElementById("userName");
var password = document.getElementById("password");
var signInButton = document.getElementById("signInButton");
var message = document.getElementById("message");

let loginAttempts = 3;

function clearMessage() {
    message.innerText = "";
}

// Add keyup event listeners
userName.addEventListener("keyup", clearMessage);
password.addEventListener("keyup", clearMessage);

signInButton.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent form submission

    if (loginAttempts <= 0) {
        message.innerText = "You have exceeded the maximum number of attempts.";
        signInButton.disabled = true;
        return;
    }

    if (userName.value === "" || password.value === "") {
        message.innerText = "Please provide the username and password";
    } else {
        if (userName.value === "great" && password.value === "learning") {
            message.style.color = "green";
            message.innerText = "You have successfully logged in";
            console.log("User logged in successfully");
            window.location.replace("./html/index.html");
        } else {
            loginAttempts--;
            message.style.color = "red";
            message.innerText = `Username or password is invalid. ${loginAttempts} attempt(s) remaining.`;
        }
    }

    userName.value = "";
    password.value = "";
});
