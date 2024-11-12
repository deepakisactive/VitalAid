document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login-form");
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const termsCheckbox = document.getElementById("terms-checkbox");
    const submitButton = document.querySelector(".submit-button");

    // Handle form submission
    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();  // Prevent default form submission

        // Validate the inputs
        if (nameInput.value.trim() === "") {
            alert("Please enter your name.");
            return;
        }
        if (emailInput.value.trim() === "") {
            alert("Please enter your email address.");
            return;
        }
        if (!validateEmail(emailInput.value)) {
            alert("Please enter a valid email.");
            return;
        }
        if (passwordInput.value.trim() === "") {
            alert("Please enter your password.");
            return;
        }
        if (!termsCheckbox.checked) {
            alert("Please agree to the terms and conditions.");
            return;
        }

        // Fetch the user data from the JSON file
        fetch('../json/LoginPage.json')
            .then(response => response.json())  // Parse the JSON data
            .then(users => {
                // Check if the entered email and password match any user
                const user = users.find(u => u.email === emailInput.value && u.password === passwordInput.value);

                if (user) {
                    alert("Login successful! Welcome, " + user.name);
                    // Redirect or take further action after successful login
                    // window.location.href = "dashboard.html";  // Example redirection
                } else {
                    alert("Invalid email or password. Please try again.");
                }
            })
            .catch(error => {
                console.error("Error fetching the user data: ", error);
                alert("Something went wrong. Please try again later.");
            });
    });

    // Simple email validation function
    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(email);
    }
});
