// Daily Challenge: Words in the stars

// Last Updated: October 7th, 2025

// Step 1: Prompt the user for several words (separated by commas)
let input = prompt("Enter several words separated by commas:");

// Step 2: Put the words into an array
let words = input.split(",");

// Step 3: Find the length of the longest word
let maxLength = 0;
for (let i = 0; i < words.length; i++) {
  if (words[i].trim().length > maxLength) {
    maxLength = words[i].trim().length;
  }
}

// Step 4: Create the top border of stars
let border = "*".repeat(maxLength + 4);
console.log(border);

// Step 5: Print each word inside the frame
for (let i = 0; i < words.length; i++) {
  let word = words[i].trim();
  let spaces = " ".repeat(maxLength - word.length);
  console.log("* " + word + spaces + " *");
}

// Step 6: Create the bottom border of stars
console.log(border);
