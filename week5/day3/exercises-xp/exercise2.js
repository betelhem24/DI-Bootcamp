// Exercise 2: Type Guards with Union Types
function describeValue(value) {
    if (typeof value === "number")
        return "This is a number"; // For numbers
    else if (typeof value === "string")
        return "This is a string"; // For strings
}
// Example usage
console.log(describeValue(42)); // Output: This is a number
console.log(describeValue("hello")); // Output: This is a string
