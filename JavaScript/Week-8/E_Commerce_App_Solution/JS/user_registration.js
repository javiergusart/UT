
var registerForm = document.getElementById('registerForm')


// Function to handle user registration
registerForm.addEventListener('submit', (event)=> {

    event.preventDefault(); // Prevent form submission
    
    const { fullname, username, email, contact, password, confirmPassword } = fetchRegisterPageData()

    // Check if passwords match
    if (password !== confirmPassword) {
        var message = document.getElementById("message")
        message.textContent = "Passwords do not match!";
        return;
    }

    // Create user object with registration details
    const user = { fullname, username, email, contact, password };
    console.log(user)
    localStorage.setItem("user", JSON.stringify(user));

    // Redirect to another page after successful registration
    loadSignInPage();
})

// Function to redirect to signin.html page
function loadSignInPage() {
    window.location.href = './sign-in.html';
}

// Function to fetch data from the register.html page
function fetchRegisterPageData() {
    // Fetch form values
    const fullname = document.getElementById("fullname").value;
    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const contact = document.getElementById("contact").value;
    const password = document.getElementById("pswd").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    return { fullname, username, email, contact, password, confirmPassword }
}