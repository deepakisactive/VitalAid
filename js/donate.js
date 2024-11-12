document.addEventListener("DOMContentLoaded", function () {
    // Fetch the JSON data
    fetch('../json/donate.json')
        .then(response => response.json())
        .then(data => {
            // Populate the donation type select
            const donationTypeSelect = document.getElementById('donation-type');
            data.donationTypes.forEach(type => {
                const option = document.createElement('option');
                option.value = type;
                option.textContent = type;
                donationTypeSelect.appendChild(option);
            });

            // Populate the donation amount radio buttons
            const donationAmountGroup = document.getElementById('donation-amount-options');
            data.donationAmounts.forEach(amount => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = 'donation-amount';
                input.value = amount;
                label.appendChild(input);
                label.appendChild(document.createTextNode(amount));
                donationAmountGroup.appendChild(label);
            });

            // Populate the donation frequency radio buttons
            const donationFrequencyGroup = document.getElementById('donation-frequency-options');
            data.donationFrequencies.forEach(frequency => {
                const label = document.createElement('label');
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = 'donation-frequency';
                input.value = frequency;
                label.appendChild(input);
                label.appendChild(document.createTextNode(frequency));
                donationFrequencyGroup.appendChild(label);
            });
        })
        .catch(error => console.error('Error loading the donation data:', error));

    // Form submission handling (same as before)
    const form = document.querySelector(".donation-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents form from submitting immediately

        // Validate terms and policy checkbox
        const termsCheckbox = document.getElementById("terms-checkbox");
        if (!termsCheckbox.checked) {
            alert("Please accept the terms and policy before proceeding.");
            return;
        }

        // Example code if donation type and amount need to be validated
        const donationAmount = form.querySelector('input[name="donation-amount"]:checked');
        if (!donationAmount) {
            alert("Please select a donation amount.");
            return;
        }

        // Submit form or redirect to checkout
        alert("Form is valid! Proceeding to checkout...");
        // Implement form submission or redirect as needed
    });
});
