// 2nd daily challenge


const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`;

// Convert JSON string to JS object
function toJs() {
  return new Promise((resolve, reject) => {
    const morseJS = JSON.parse(morse);
    Object.keys(morseJS).length === 0 ? reject(new Error("Morse object is empty")) : resolve(morseJS);
  });
}

// Convert user input to Morse code
function toMorse(morseJS) {
  return new Promise((resolve, reject) => {
    const userInput = prompt("Enter a word or sentence:").toLowerCase();
    const morseArray = [];

    for (let char of userInput) {
      if (!morseJS[char]) return reject(new Error(`Character "${char}" does not exist in Morse code`));
      morseArray.push(morseJS[char]);
    }

    resolve(morseArray);
  });
}

// Display Morse code on page
function joinWords(morseTranslation) {
  document.body.textContent = morseTranslation.join("\n");
}

// Chain the functions
toJs()
  .then(toMorse)
  .then(joinWords)
  .catch(error => alert(error.message));
