// Exercise 4: Static Properties and Methods


class Calculator {
    // Adds two numbers
    static add(a: number, b: number): number {
        return a + b;
    }

    // Subtracts the second number from the first
    static subtract(a: number, b: number): number {
        return a - b;
    }
}

// Call static methods without creating an instance
console.log(Calculator.add(10, 5));      // Output: 15
console.log(Calculator.subtract(10, 5)); // Output: 5
