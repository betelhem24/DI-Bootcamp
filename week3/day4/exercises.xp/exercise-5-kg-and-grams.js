// Exercise 5: Convert kilograms to grams

// 1. Function Declaration
function kgToGrams1(kg) {
    return kg * 1000;
}
console.log("Function Declaration:", kgToGrams1(2), "grams"); // 2000 grams

// 2. Function Expression
const kgToGrams2 = function(kg) {
    return kg * 1000;
};
console.log("Function Expression:", kgToGrams2(3), "grams"); // 3000 grams

// Difference between function declaration and expression:
// - Function declarations are hoisted, meaning they can be called before they are defined.
// - Function expressions are not hoisted; they can only be called after they are defined.

// 3. One-line Arrow Function
const kgToGrams3 = kg => kg * 1000;
console.log("Arrow Function:", kgToGrams3(4), "grams"); // 4000 grams

// Explanation:
// - All three functions convert kilograms to grams by multiplying by 1000
// - Examples show that each function works correctly
