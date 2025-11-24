// Exercises XP Ninja

// Exercise 1: Random Number

// Instructions:
// 1. Get a random number between 1 and 100.
// 2. Console.log all even numbers from 0 to the random number.

// Step 1: Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100) + 1; 

console.log("Random Number:", randomNumber); // Show the random number

// Step 2: Loop from 0 to the random number and print even numbers
for (let i = 0; i <= randomNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}


// Exercise 2: Capitalized letters

// Step 1: Define the function
function capitalize(string) {
    // Step 2: Initialize empty strings for both cases
    let evenCaps = "";
    let oddCaps = "";
    
    // Step 3: Loop through each character
    for (let i = 0; i < string.length; i++) {
        // Step 4: Capitalize based on even or odd index
        if (i % 2 === 0) {
            evenCaps += string[i].toUpperCase();
            oddCaps += string[i];
        } else {
            evenCaps += string[i];
            oddCaps += string[i].toUpperCase();
        }
    }
    
    // Step 5: Return both versions in an array
    return [evenCaps, oddCaps];
}

// Step 6: Test the function
console.log(capitalize("abcdef")); // ['AbCdEf', 'aBcDeF']


// Exercise 3 : Is palindrome?

// Instructions: Write a JavaScript function that checks whether a string is a palindrome or not.
// Note: A palindrome is a word, phrase, or sequence that is spelled the same both backwards and forward, e.g., madam, bob, or kayak.

function isPalindrome(str) { 
    let lowerCaseStr = str.toLowerCase(); // convert to lowercase
    let reversedStr = lowerCaseStr.split('').reverse().join(''); // reverse the string
    return lowerCaseStr === reversedStr; // check if original equals reversed
}

// Example usage
console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Bob"));   // true


// Exercise 4: Biggest Number

//  Create a function called biggestNumberInArray(arrayNumber) 

function biggestNumberInArray(arrayNumber) {
  // Step 1: Return 0 if the array is empty
  if (arrayNumber.length === 0) return 0;

  // Step 2: Assume the first element is the biggest
  let biggest = arrayNumber[0];

  // Step 3: Loop through the array to find the biggest number
  for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i] > biggest) {
      biggest = arrayNumber[i];
    }
  }

  // Step 4: Return the biggest number
  return biggest;
}

// Example usage
const array = [-1, 0, 3, 100, 99, 2, 99];
console.log(biggestNumberInArray(array)); 

const array2 = ['a', 3, 4, 2];
console.log(biggestNumberInArray(array2)); 

const array3 = [];
console.log(biggestNumberInArray(array3)); 



// Exercise 5: Unique Elements

// Instructions: Write a JS function that takes an array and returns a new array with only unique elements.

// Step 1: Create the function
function getUniqueElements(arr) {
    // Step 2: Remove duplicates using Set
    let uniqueSet = new Set(arr);

    // Step 3: Convert Set back to array
    let uniqueArray = Array.from(uniqueSet);

    // Step 4: Return the new array
    return uniqueArray;
}

// Step 5: Test the function with the example
let list = [1, 2, 3, 3, 3, 3, 4, 5];
let newList = getUniqueElements(list);
console.log(newList); // Output: [1, 2, 3, 4, 5]


// Exercise 6: Calendar

// Create a function called createCalendar(year, month)

function createCalendar(year, month) {
    // Step 1: Create table
    let table = document.createElement("table"); 

    // Step 2: Create table header with weekdays
    let thead = document.createElement("thead"); 
    let headerRow = document.createElement("tr"); 
    let weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];

    weekdays.forEach(day => {
        let th = document.createElement("th");
        th.innerText = day;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    table.appendChild(thead);

    // Step 3: Create table body with dates
    let tbody = document.createElement("tbody"); 
    let firstDay = new Date(year, month - 1, 1).getDay(); 
    firstDay = firstDay === 0 ? 6 : firstDay - 1; // shift Sunday to end
    let daysInMonth = new Date(year, month, 0).getDate(); 
    let date = 1;

    for (let i = 0; date <= daysInMonth; i++) {
        let row = document.createElement("tr");
        for (let j = 0; j < 7; j++) {
            let cell = document.createElement("td");
            if (i === 0 && j < firstDay || date > daysInMonth) {
                cell.innerText = ".";
            } else {
                cell.innerText = date;
                date++;
            }
            row.appendChild(cell);
        }
        tbody.appendChild(row);
    }

    table.appendChild(tbody);

    // Step 4: Add table to the document
    document.body.appendChild(table);
}

// Example usage
createCalendar(2012, 9);

