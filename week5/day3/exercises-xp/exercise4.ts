// Exercise 4: Type Assertions with Union Types

// Function to get the first element of an array and assert it as a string
function getFirstElement(arr: (number | string)[]): string {
    const first = arr[0]; // Get first element
    return first as string; // Assert as string
}

// Test arrays with mixed types
const mixedArray1 = [1, "hello", 3];
const mixedArray2 = ["world", 2, 5];
const mixedArray3 = [42, 100, "typescript"];

// Testing the function
console.log(getFirstElement(mixedArray1)); // 1
console.log(getFirstElement(mixedArray2)); // "world"
console.log(getFirstElement(mixedArray3)); // 42
