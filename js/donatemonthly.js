// donatemonthly.js

// Function to validate the form before submission
function validateForm() {
    const fullName = document.getElementById("full-name").value;
    const mobileNumber = document.getElementById("mobile-number").value;
    const mission = document.getElementById("mission").value;
    const termsAccepted = document.getElementById("terms").checked;

    if (!fullName || !mobileNumber || !mission) {
        alert("Please fill in all the required fields.");
        return false;
    }

    if (!termsAccepted) {
        alert("You must accept the terms and policy to proceed.");
        return false;
    }

    return true;
}

// Add event listener to the donation form
document.querySelector(".donate-form").addEventListener("submit", function(event) {
    // Prevent form submission if validation fails
    if (!validateForm()) {
        event.preventDefault();
    }
});

// Function to dynamically populate donation amounts based on JSON data
function loadDonationAmounts() {
    const amountOptions = document.querySelector(".amount-options");
    fetch('../json/donatemonthly.json')
        .then(response => response.json())
        .then(data => {
            data.amounts.forEach(amount => {
                const div = document.createElement("div");
                div.classList.add("amount-option");
                div.textContent = `₹${amount}/Month`;
                div.addEventListener('click', function() {
                    // You can add logic to highlight the selected option
                    alert(`You selected ₹${amount}/Month`);
                });
                amountOptions.appendChild(div);
            });
        })
        .catch(error => console.error('Error loading donation amounts:', error));

}

// Call the function when the page loads
window.onload = function() {
    loadDonationAmounts();
};
