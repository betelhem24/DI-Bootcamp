//  Exercise 7: Type Assertions and Generic Constraints

// Generic function with constraint: T must have toString()
function formatInput<T extends { toString(): string }>(input: T): string {
    const strInput = input.toString() as string; // Assert input as string
    return `"${strInput.trim()}"`;               // Format and return string
}

// Examples
const formattedNumber = formatInput(123);      // "123"
const formattedString = formatInput(" hello "); // "hello"
const formattedDate = formatInput(new Date());  // e.g., "Sat Dec 09 2025 00:00:00 GMT+0000"

// Output
console.log(formattedNumber);
console.log(formattedString);
console.log(formattedDate);
