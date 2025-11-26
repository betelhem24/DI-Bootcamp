// Step 1: Function Declaration
function kgToGramsDeclaration(kg) {
    return kg * 1000;
}

// Invoke the function declaration
console.log("Function Declaration:", kgToGramsDeclaration(5)); // 5000

// Step 2: Function Expression
const kgToGramsExpression = function(kg) {
    return kg * 1000;
};

// Invoke the function expression
console.log("Function Expression:", kgToGramsExpression(3)); // 3000

// Difference between function declaration and expression:
// Function declarations are hoisted (can be called before definition),
// while function expressions are not hoisted and can only be called after assignment.

// Step 3: One-line Arrow Function
const kgToGramsArrow = kg => kg * 1000;

// Invoke the arrow function
console.log("Arrow Function:", kgToGramsArrow(7)); // 7000

// Explanation:
// - Each function converts kg to grams by multiplying by 1000
// - We demonstrate three ways to write functions in JavaScript
