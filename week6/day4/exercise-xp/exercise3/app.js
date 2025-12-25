// app.js - CommonJS syntax

const { readFile, writeFile } = require('./fileManager');

// Read content from "Hello World.txt"
console.log('Reading from "Hello World.txt":');
const helloContent = readFile('Hello World.txt');
if (helloContent) {
    console.log(`Content: ${helloContent}`);
}

console.log('\n-------------------\n');

// Write to "Bye World.txt"
console.log('Writing to "Bye World.txt":');
writeFile('Bye World.txt', 'Writing to the file');

console.log('\n-------------------\n');

// Verify by reading the updated content
console.log('Reading updated content from "Bye World.txt":');
const byeContent = readFile('Bye World.txt');
if (byeContent) {
    console.log(`Content: ${byeContent}`);
}