document.addEventListener("DOMContentLoaded", () => {
    const registerSection = document.getElementById("register-section");
    const loginSection = document.getElementById("login-section");
    const message = document.getElementById("message");

    const registerBtn = document.getElementById("register-btn");
    const loginBtn = document.getElementById("login-btn");

    // Register Functionality
    registerBtn.addEventListener("click", () => {
        const username = document.getElementById("reg-username").value.trim();
        const password = document.getElementById("reg-password").value.trim();

        if (!username || !password) {
            message.textContent = "Please enter a username and password.";
            return;
        }

        localStorage.setItem("username", username);
        localStorage.setItem("password", password);

        message.textContent = "Registration successful! You can now log in.";
        registerSection.style.display = "none";
        loginSection.style.display = "block";
    });

    // Login Functionality
    loginBtn.addEventListener("click", () => {
        const username = document.getElementById("login-username").value.trim();
        const password = document.getElementById("login-password").value.trim();

        const storedUsername = localStorage.getItem("username");
        const storedPassword = localStorage.getItem("password");

        if (username === storedUsername && password === storedPassword) {
            message.textContent = "Login successful! Welcome to the secured page.";
            message.style.color = "green";
        } else {
            message.textContent = "Invalid username or password. Please try again.";
            message.style.color = "red";
        }
    });
});
