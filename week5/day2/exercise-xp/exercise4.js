// Exercise 4: Static Properties and Methods
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    // Adds two numbers
    Calculator.add = function (a, b) {
        return a + b;
    };
    // Subtracts the second number from the first
    Calculator.subtract = function (a, b) {
        return a - b;
    };
    return Calculator;
}());
// Call static methods without creating an instance
console.log(Calculator.add(10, 5)); // Output: 15
console.log(Calculator.subtract(10, 5)); // Output: 5
