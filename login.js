// Store user accounts
const users = JSON.parse(localStorage.getItem("users")) || {};

// Function to check login
function checkLogin() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (users[username] && users[username] === password) {
        alert("Login successful!");
        window.location.href = "recipes.html"; // Redirect to recipes.html
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// Function to create a new account
function createAccount() {
    const newUsername = document.getElementById("new-username").value;
    const newPassword = document.getElementById("new-password").value;

    if (newUsername in users) {
        alert("Username already exists. Try another.");
    } else {
        users[newUsername] = newPassword;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Account created! You can now log in.");
    }
}
