//  Exercise 9: Function Overloading with Default Parameters

// STEP 1: Declare the function overloads
function greet(name: string): string; // when called with a name
function greet(): string;             // when called without arguments

// STEP 2: Implement the function
function greet(name?: string): string {
    // If name is provided, use it
    // Otherwise, use "Guest" as the default
    return `Hello, ${name ?? "Guest"}!`;
}

// STEP 3: Test the function with both cases
console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet());        // Output: Hello, Guest!
