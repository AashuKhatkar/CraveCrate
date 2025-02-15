document.getElementById('payment-form').addEventListener('submit', function(event) {
    event.preventDefault();  


    const cardholderName = document.getElementById('cardholder-name').value;
    const cardNumber = document.getElementById('card-number').value;
    const expiryDate = document.getElementById('expiry-date').value;
    const cvc = document.getElementById('cvc').value;

    
    document.getElementById('payment-error').textContent = '';
    document.getElementById('payment-success').textContent = '';


    if (!cardholderName || !cardNumber || !expiryDate || !cvc) {
        document.getElementById('payment-error').textContent = 'Please fill in all fields correctly.';
        return;
    }

    if (cardNumber.length !== 16 || !/^\d+$/.test(cardNumber)) {
        document.getElementById('payment-error').textContent = 'Card number must be 16 digits.';
        return;
    }
    if (cvc.length !== 3 || !/^\d+$/.test(cvc)) {
        document.getElementById('payment-error').textContent = 'CVC must be 3 digits.';
        return;
    }

    if (!/^\d{2}\/\d{2}$/.test(expiryDate)) {
        document.getElementById('payment-error').textContent = 'Expiry date format should be MM/YY.';
        return;
    }

    
    document.getElementById('payment-success').textContent = 'Payment successful! Thank you for your purchase.';
});