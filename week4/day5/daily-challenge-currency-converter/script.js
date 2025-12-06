// === CONFIGURATION ===
const API_KEY = "4376b0a080c37a7476d2f58d";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

// DOM elements
const fromCurrencyInput = document.getElementById("fromCurrency");
const toCurrencyInput = document.getElementById("toCurrency");
const amountInput = document.getElementById("amount");
const resultDisplay = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");
const switchBtn = document.getElementById("switchBtn");
const fromDatalist = document.getElementById("fromCurrencies");
const toDatalist = document.getElementById("toCurrencies");

let supportedCurrencies = [];

// === FETCH SUPPORTED CURRENCIES ===
async function fetchSupportedCurrencies() {
  try {
    const response = await fetch(`${BASE_URL}/codes`);
    if (!response.ok) throw new Error("Failed to fetch currencies.");

    const data = await response.json();
    supportedCurrencies = data.supported_codes; // array of [code, name]

    populateCurrencyDatalists();

    // Perform initial conversion
    convertCurrency();
  } catch (error) {
    console.error(error);
    resultDisplay.textContent = "Error fetching currencies. Please try again later.";
  }
}

// Populate datalists for input fields
function populateCurrencyDatalists() {
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

  // Default selections
  fromCurrencyInput.value = "USD";
  toCurrencyInput.value = "EUR";
}

// === FETCH CONVERSION RATE ===
async function convertCurrency() {
  const fromCurrency = fromCurrencyInput.value.toUpperCase();
  const toCurrency = toCurrencyInput.value.toUpperCase();
  const amount = parseFloat(amountInput.value);

  // Input validation
  if (!fromCurrency || !toCurrency || isNaN(amount) || amount <= 0) {
    resultDisplay.textContent = "Please enter a valid amount and select currencies.";
    return;
  }

  try {
    resultDisplay.textContent = "Converting...";

    const response = await fetch(`${BASE_URL}/pair/${fromCurrency}/${toCurrency}/${amount}`);
    if (!response.ok) throw new Error("Conversion failed. Please try again.");

    const data = await response.json();
    if (data.result !== "success") throw new Error(data["error-type"] || "Conversion error.");

    const convertedAmount = data.conversion_result;
    resultDisplay.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
  } catch (error) {
    console.error(error);
    resultDisplay.textContent = `Error: ${error.message}`;
  }
}

// === SWITCH CURRENCIES ===
function switchCurrencies() {
  const temp = fromCurrencyInput.value;
  fromCurrencyInput.value = toCurrencyInput.value;
  toCurrencyInput.value = temp;

  if (amountInput.value) convertCurrency();
}

// === EVENT LISTENERS ===
convertBtn.addEventListener("click", convertCurrency);
switchBtn.addEventListener("click", switchCurrencies);

// Initialize
fetchSupportedCurrencies();
