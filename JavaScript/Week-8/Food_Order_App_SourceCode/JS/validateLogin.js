// Call validateLogIn() on every page except sign-in.html and register.html
// This function checks login status, alerts if not logged in, and manages sign out

function validateLogIn() {
  // Check login status in sessionStorage
  if (sessionStorage.getItem("loginStatus") !== "true") {
    alert("You must login first to access any page.");
    window.location.href = "../sign-in.html";
    return;
  }
  // Set user name in header if available
  const userName = sessionStorage.getItem("userName");
  if (userName && document.getElementById("userName")) {
    document.getElementById("userName").textContent = `Welcome, ${userName}`;
  }
  // Add sign out functionality
  const signoutBtn = document.getElementById("signout");
  if (signoutBtn) {
    signoutBtn.addEventListener("click", function () {
      sessionStorage.clear();
      window.location.href = "../sign-in.html";
    });
  }
}
