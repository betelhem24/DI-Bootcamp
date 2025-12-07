//  Exercise 9: Function Overloading with Default Parameters
// STEP 2: Implement the function
function greet(name) {
    // If name is provided, use it
    // Otherwise, use "Guest" as the default
    return "Hello, ".concat(name !== null && name !== void 0 ? name : "Guest", "!");
}
// STEP 3: Test the function with both cases
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet()); // Output: Hello, Guest!
