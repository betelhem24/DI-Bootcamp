// Exercise 4: Type Assertions with Union Types
// Function to get the first element of an array and assert it as a string
function getFirstElement(arr) {
    var first = arr[0]; // Get first element
    return first; // Assert as string
}
// Test arrays with mixed types
var mixedArray1 = [1, "hello", 3];
var mixedArray2 = ["world", 2, 5];
var mixedArray3 = [42, 100, "typescript"];
// Testing the function
console.log(getFirstElement(mixedArray1)); // 1
console.log(getFirstElement(mixedArray2)); // "world"
console.log(getFirstElement(mixedArray3)); // 42
