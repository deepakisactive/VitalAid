
// Function to validate form fields
function validateForm(event) {
    event.preventDefault(); // Prevent form from submitting by default
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const otp = document.getElementById('otp').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const terms = document.getElementById('terms-checkbox').checked;

    // Basic validation
    if (!name || !phone || !otp || !email || !password || !confirmPassword) {
        alert("All fields are required.");
        return;
    }
    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }
    if (!terms) {
        alert("You must agree to the terms and policy.");
        return;
    }

    // Simulate OTP verification
    if (otp !== "1234") {  // Example OTP
        alert("Invalid OTP.");
        return;
    }

    // Fetch existing users from JSON file
    fetch('../json/CreateAccount.json')
        .then(response => response.json())
        .then(users => {
            // Add the new user
            const newUser = {
                name,
                phone,
                email,
                password // NOTE: Passwords should be hashed in a real application
            };
            users.push(newUser);

            // Save back to JSON (in real projects, use backend/server for this)
            console.log('User registered:', newUser);
            alert("Account created successfully!");
        })
        .catch(error => console.error('Error:', error));
}

document.querySelector('.create-account-form').addEventListener('submit', validateForm);

