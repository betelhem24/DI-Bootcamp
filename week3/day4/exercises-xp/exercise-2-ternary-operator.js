// Step 1: Transform winBattle() to an arrow function
const winBattle = () => true; // arrow function returns true

// Step 2: Create a variable experiencePoints and assign using a ternary operator
// If winBattle() is true, experiencePoints = 10, else 1
const experiencePoints = winBattle() ? 10 : 1;

// Step 3: Log the result
console.log("Experience Points:", experiencePoints);

// Explanation:
// - winBattle() returns true
// - The ternary operator checks winBattle()
// - Since it's true, experiencePoints gets 10
