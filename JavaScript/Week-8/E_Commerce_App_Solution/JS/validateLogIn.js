// Function to validate login on every page
function validateLogIn() {
    // Fetch the login info from the session storage
    const userLogin =  JSON.parse(sessionStorage.getItem("login"));

    // Check whether the login status is true
    if (userLogin === true) {
        console.log("log in successfull !!!!")
    }
    else {
        // If login status is false, redirect to signin.html page
        alert("You must login first to access any page.")
        window.location.href = '../sign-in.html';
    }

    var welcome = document.getElementById('uName')
    welcome.textContent = JSON.parse(localStorage.getItem("user")).username

    var signOut = document.getElementById('signout')
    signOut.addEventListener('click', () => {
        sessionStorage.setItem("login", false);
        window.location.href = "../sign-in.html"
    })
}