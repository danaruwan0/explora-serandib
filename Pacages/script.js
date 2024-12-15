function toggleMenu() {
    const menu = document.getElementById('navbarMenu');
    menu.classList.toggle('show');
}

function showPaymentCard() {
    document.getElementById('packageCard').style.display = 'none';
    document.getElementById('paymentCard').style.display = 'block';
}

function clearForm() {
    document.getElementById('paymentForm').reset();
    document.getElementById('errorMsg').style.display = 'none';
}

function processPayment() {
    const cardType = document.getElementById('cardType').value;
    const cardName = document.getElementById('cardName').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expDate = document.getElementById('expDate').value;
    const cvv = document.getElementById('cvv').value;
    const errorMsg = document.getElementById('errorMsg');

    if (!cardType || !cardName || !cardNumber || !expDate || !cvv) {
        errorMsg.textContent = "Please fill in all fields correctly.";
        errorMsg.style.display = 'block';
        return;
    }

    if (cardNumber.length !== 16 || isNaN(cardNumber)) {
        errorMsg.textContent = "Invalid card number. Must be 16 digits.";
        errorMsg.style.display = 'block';
        return;
    }

    const expDatePattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expDatePattern.test(expDate)) {
        errorMsg.textContent = "Invalid expiry date. Use MM/YY format.";
        errorMsg.style.display = 'block';
        return;
    }

    errorMsg.style.display = 'none';
    alert("Payment processed successfully!");
    document.getElementById('packageCard').style.display = 'block';
    document.getElementById('paymentCard').style.display = 'none';
}
