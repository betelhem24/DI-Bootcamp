
// Exercises XP Gold

// Exercise 1: Divisible by three

// 1: Create an array of numbers
let numbers = [123, 8409, 100053, 333333333, 7]; 

// 2: Loop through each number in the array
for (let i = 0; i < numbers.length; i++) { 
  // 3: Check if the current number is divisible by 3
  if (numbers[i] % 3 === 0) { 
    // 4: If divisible, print true
    console.log(true); 
  } else {
    // 5: If not divisible, print false
    console.log(false); 
  }
}


// Exercise 2 : Attendance

// Step 1: Create the guest list object
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

// Step 2: Prompt the student for their name
let studentName = prompt("What is your name?");

// Step 3: Check if the name is in the guest list
if (studentName in guestList) {
  // Step 3a: If name exists, print greeting with country
  console.log("Hi! I'm " + studentName + ", and I'm from " + guestList[studentName] + ".");
} else {
  // Step 3b: If name does not exist, print guest message
  console.log("Hi! I'm a guest.");
}


// Exercise 3 : Playing with numbers

// Exercise 3: Playing with numbers
let age = [20, 5, 12, 43, 98, 55];

// 1. Sum of all numbers
let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i]; // Add each age to sum
}
console.log("Sum of all ages:", sum);

// 2. Highest age
let highest = age[0];
for (let i = 1; i < age.length; i++) {
    if (age[i] > highest) {
        highest = age[i]; // Update highest if current age is bigger
    }
}
console.log("Highest age:", highest);
