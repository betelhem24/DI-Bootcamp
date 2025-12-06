// Supported currencies including Israel, Ethiopia, China
const supportedCurrencies = [
  ["USD", "United States Dollar"],
  ["EUR", "Euro"],
  ["GBP", "British Pound Sterling"],
  ["JPY", "Japanese Yen"],
  ["AUD", "Australian Dollar"],
  ["CAD", "Canadian Dollar"],
  ["CHF", "Swiss Franc"],
  ["CNY", "Chinese Yuan"],      // China
  ["INR", "Indian Rupee"],
  ["ILS", "Israeli Shekel"],    // Israel
  ["ETB", "Ethiopian Birr"]     // Ethiopia
];

// Mock conversion rates (base USD)
const conversionRates = {
  "USD": 1,
  "EUR": 0.92,
  "GBP": 0.81,
  "JPY": 149.5,
  "AUD": 1.49,
  "CAD": 1.34,
  "CHF": 0.89,
  "CNY": 6.97,
  "INR": 83.3,
  "ILS": 3.7,
  "ETB": 55.0
};

// Populate datalists
function populateCurrencyDatalists() {
  const fromDatalist = document.getElementById("fromCurrencies");
  const toDatalist = document.getElementById("toCurrencies");

  supportedCurrencies.forEach(([code, name]) => {
    const optionFrom = document.createElement("option");
    optionFrom.value = code;
    optionFrom.textContent = `${code} - ${name}`;
    fromDatalist.appendChild(optionFrom);

    const optionTo = document.createElement("option");
    optionTo.value = code;
    optionTo.textContent = `${code} - ${name}`;
    toDatalist.appendChild(optionTo);
  });

  document.getElementById("fromCurrency").value = "USD";
  document.getElementById("toCurrency").value = "EUR";
}

populateCurrencyDatalists();

// Convert currency
function convertCurrency() {
  const amount = parseFloat(document.getElementById("amount").value);
  const fromCurrency = document.getElementById("fromCurrency").value.toUpperCase();
  const toCurrency = document.getElementById("toCurrency").value.toUpperCase();

  if (!amount || !conversionRates[fromCurrency] || !conversionRates[toCurrency]) {
    document.getElementById("result").textContent = "Please enter valid amount and currencies.";
    return;
  }

  const amountInUSD = amount / conversionRates[fromCurrency];
  const convertedAmount = amountInUSD * conversionRates[toCurrency];
  document.getElementById("result").textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}

// Convert button
document.getElementById("convertBtn").addEventListener("click", convertCurrency);

// Switch currencies
function switchCurrencies() {
  const fromInput = document.getElementById("fromCurrency");
  const toInput = document.getElementById("toCurrency");
  const temp = fromInput.value;
  fromInput.value = toInput.value;
  toInput.value = temp;
  convertCurrency();
}

document.getElementById("switchBtn").addEventListener("click", switchCurrencies);
