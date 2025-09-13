
var signInButton = document.getElementById("signInButton");

function clearMessage() {
    const message = document.getElementById('message')
    message.innerText = "";
}

// Add keyup event listeners to both userName and password fields
userName.addEventListener("keyup", clearMessage);
password.addEventListener("keyup", clearMessage);

signInButton.addEventListener("click", (event) => {
  
  event.preventDefault(); // Prevent form submission

    const { username, password, messageElement } = fetchSignInPageData()

    try {
        // Fetch userInfo from the local storage
        const registeredUser = JSON.parse(localStorage.getItem("user"));
        console.log(registeredUser);

        // Check if the entered username or password is empty
        if (username === "" || password === "") {
            messageElement.textContent =
                "Username and Password fields cannot be empty!!";
        } else {
            // Check if the username and password of the registeredUser from local storage matches the entered username and password
            if (
                username === registeredUser.username &&
                password === registeredUser.password
            ) {
                // Set the session storage with the login info
                sessionStorage.setItem("login", true);
                window.location.replace("./html/index.html");
            } else {

                // If the username or password does not match, display error message
                messageElement.textContent = "Incorrect Username or Password!!";
                // Set the login info in the session storage as false
                sessionStorage.setItem("login", false);
            }
        }
    } catch (err) {
        // If the user is not registered, display appropriate error message
        messageElement.textContent =
            "The user is not registered yet. Please click on the register button to register yourself!!";
    }
})

// Function to fetch data from the signin.html page
function fetchSignInPageData() {
    // Fetch data from the signin form 
    const username = document.getElementById("userName").value;
    const password = document.getElementById("password").value;
    const messageElement = document.getElementById("message");

    return { username, password, messageElement };
}