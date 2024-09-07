function toggleMenu() {
    var options = document.querySelector('.options');
    options.classList.toggle('show');
}

async function convertCurrency() {
    const amount = document.getElementById("amount").value;
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
    const data = await response.json();

    const exchangeRate = data.rates[toCurrency];
    const convertedAmount = amount * exchangeRate;

    document.getElementById("convertedAmount").innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}