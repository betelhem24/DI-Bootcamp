// Exercises XP Gold

// Exercise 1 : is_Blank

// Step: Write a program to check whether a string is blank or not.

function isBlank(str) {
  // Check if the string is empty
  if (str === "") {
    return true;
  }

  // If not empty, return false
  return false;
}

// Step: Test the function with the examples from the question
console.log(isBlank(''));    // --> true
console.log(isBlank('abc')); // --> false

// Exercise 2 : Abbrev_name

// Function to convert a full name into an abbreviated form
function abbrevName(fullName) {

    // Step 2: split the name into two parts
    let nameParts = fullName.split(" ");

    // Step 3: get the first name
    let firstName = nameParts[0];

    // Step 4: get the first letter of the last name
    let lastInitial = nameParts[1].charAt(0);

    // Step 5 & 6: return "First L."
    return firstName + " " + lastInitial + ".";
}

// Test the function with the example
console.log(abbrevName("Robin Singh")); // "Robin S."




// Exercise 3 : SwapCase
// Step 1: Create a function that takes a string
function swapCase(text) {
    let result = "";  // Step 2: Empty string to store swapped characters

    // Step 3: Loop through the string
    for (let i = 0; i < text.length; i++) {
        let char = text[i]; // Get current character

        // Step 4: Swap cases
        if (char === char.toUpperCase()) {
            result += char.toLowerCase(); // Upper → lower
        } else {
            result += char.toUpperCase(); // Lower → upper
        }
    }

    // Step 5: Return final swapped string
    return result;
}

// Step 6: Test the function with the example
console.log(swapCase("The Quick Brown Fox")); // Expected output: tHE qUICK bROWN fOX




// Exercise 4 : Omnipresent Value
// Step: Create a function that checks if a value appears in every subarray

function isOmnipresent(arr, value) {

  // Step: Loop through each subarray
  for (let i = 0; i < arr.length; i++) {

    // Step: Check if the value is NOT in the current subarray
    if (!arr[i].includes(value)) {

      // Step: If missing in any subarray → not omnipresent
      return false;
    }
  }

  // Step: If it appears in all subarrays → true
  return true;
}

// Test examples from the question
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)); // true
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)); // false


