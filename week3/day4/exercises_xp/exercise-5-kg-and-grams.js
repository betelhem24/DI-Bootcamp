// Function declaration
function kgToGrams1(kg) {
    return kg * 1000;
}
console.log(kgToGrams1(2)); // 2000

// Function expression
const kgToGrams2 = function(kg) {
    return kg * 1000;
};
console.log(kgToGrams2(3)); // 3000

// Arrow function (one line)
const kgToGrams3 = kg => kg * 1000;
console.log(kgToGrams3(5)); // 5000

// Difference: Function declarations are hoisted; expressions are not.
