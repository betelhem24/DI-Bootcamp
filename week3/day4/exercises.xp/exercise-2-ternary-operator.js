// Exercise 2: Ternary Operator

// Step 1: Transform winBattle() into an arrow function
const winBattle = () => true; // always returns true

// Step 2: Create experiencePoints using ternary operator
const experiencePoints = winBattle() ? 10 : 1;

// Step 3: Log the result
console.log("Experience Points:", experiencePoints); // 10

// Explanation:
// - winBattle() returns true
// - Ternary operator checks if winBattle() is true
// - Since it's true, experiencePoints = 10
