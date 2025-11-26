// Exercise 5 : Kg and grams

// Step 1: Function Declaration
function kgToGrams(kg) {  
    return kg * 1000;      
}
console.log(kgToGrams(5)); // 5000

// Step 2: Function Expression
const kgToGramsExpr = function(kg) {  
    return kg * 1000;                  
};
console.log(kgToGramsExpr(3)); // 3000

// Difference: Function declaration is hoisted, expression is not

// Step 3: One line Arrow Function
const kgToGramsArrow = kg => kg * 1000;
console.log(kgToGramsArrow(2)); // 2000
