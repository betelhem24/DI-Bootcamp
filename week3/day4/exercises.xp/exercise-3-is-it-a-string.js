// #1 Create an arrow function to check if a value is a string
const isString = (value) => typeof value === 'string';

// #2 Test with a string
console.log(isString('hello')); // true

// #3 Test with an array
console.log(isString([1, 2, 4, 0])); // false
