// challenge.js
const greet = require('./greeting');
const displayColorfulMessage = require('./colorful-message');
const readFileContent = require('./read-file');

console.log('\n=== CHALLENGE START ===\n');

// Use greet function
console.log(greet('Student'));
console.log(greet('Developer'));

console.log('\n--- Colorful Message ---');
// Display colorful message
displayColorfulMessage();

console.log('\n--- File Content ---');
// Read and display file content
readFileContent();

console.log('\n=== CHALLENGE COMPLETE ===\n');