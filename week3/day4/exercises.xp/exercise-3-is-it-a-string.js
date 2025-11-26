// Exercise 3: Check if the argument is a string

// Step 1: Create an arrow function that checks if the argument is a string
const isString = (value) => typeof value === 'string';

// Step 2: Test the function with examples
console.log(isString('hello')); // true
console.log(isString([1, 2, 4, 0])); // false
console.log(isString(123)); // false
console.log(isString('123')); // true

// Explanation:
// - typeof operator returns the type of the argument
// - If the type is 'string', the function returns true
// - Otherwise, it returns false
