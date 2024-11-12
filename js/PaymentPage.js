
  // Fetch JSON data for payment options
  async function loadPaymentOptions() {
    try {
      const response = await fetch('../json/PaymentPage.json');
      const data = await response.json();

      // Populate Credit/Debit Card Options
      const cardSelect = document.getElementById('card');
      data.cards.forEach(card => {
        const option = document.createElement('option');
        option.value = card.id;
        option.textContent = card.name;
        cardSelect.appendChild(option);
      });

      // Populate Net Banking Options
      const netBankingSelect = document.getElementById('netbanking');
      data.netBanking.forEach(bank => {
        const option = document.createElement('option');
        option.value = bank.id;
        option.textContent = bank.name;
        netBankingSelect.appendChild(option);
      });

      // Populate UPI Options
      const upiSelect = document.getElementById('upi');
      data.upi.forEach(upi => {
        const option = document.createElement('option');
        option.value = upi.id;
        option.textContent = upi.name;
        upiSelect.appendChild(option);
      });
    } catch (error) {
      console.error('Error loading payment options:', error);
    }
  }

  // Run the function on page load
  document.addEventListener('DOMContentLoaded', loadPaymentOptions);

  // Handle form submission
  document.querySelector('.payment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Example handling of the payment submission
    alert('Payment processing...');
    // Here, you'd typically send payment data to the backend for processing
  });
