// app.js - CommonJS syntax

const _ = require('lodash');
const { addition, multiplication } = require('./math');

console.log('=== Math Operations ===\n');

// Using custom math module
const num1 = 10;
const num2 = 5;

console.log(`Addition: ${num1} + ${num2} = ${addition(num1, num2)}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiplication(num1, num2)}`);

console.log('\n-------------------\n');

// Using lodash utility functions
const numbers = [10, 20, 30, 40, 50];

console.log('=== Lodash Operations ===\n');
console.log(`Numbers array: [${numbers}]`);
console.log(`Sum (using lodash): ${_.sum(numbers)}`);
console.log(`Average (using lodash): ${_.mean(numbers)}`);
console.log(`Max value (using lodash): ${_.max(numbers)}`);
console.log(`Min value (using lodash): ${_.min(numbers)}`);

// More complex calculation using both
const resultArray = _.map(numbers, num => multiplication(num, 2));
console.log(`\nEach number multiplied by 2: [${resultArray}]`);
console.log(`Sum of results: ${addition(_.sum(resultArray), 0)}`);