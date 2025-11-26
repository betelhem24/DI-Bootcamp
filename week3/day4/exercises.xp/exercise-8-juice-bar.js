// Exercise 8 – Juice Bar

// Select the output div to display messages
const output = document.getElementById("output");

// Part I: Outer function makeJuice with inner function addIngredients
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        // Display message in DOM
        const msg = `The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`;
        const p = document.createElement("p");
        p.textContent = msg;
        output.appendChild(p);
    }

    // Invoke inner function ONCE
    addIngredients("apple", "banana", "orange");
}

// Invoke the outer function for Part I
makeJuice("medium");

// Part II: Adding multiple ingredients and display function
function makeJuicePart2(size) {
    const ingredients = [];

    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    function displayJuice() {
        const msg = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        const p = document.createElement("p");
        p.textContent = msg;
        output.appendChild(p);
    }

    // Add 6 ingredients in total by invoking addIngredients twice
    addIngredients("mango", "pineapple", "strawberry");
    addIngredients("kiwi", "pear", "grapes");

    // Display the final juice order
    displayJuice();
}

// Invoke Part II
makeJuicePart2("large");

// Explanation:
// Part I:
// - makeJuice() is the outer function that receives the size
// - addIngredients() is the inner function that displays the juice order
// - addIngredients() is invoked ONCE inside makeJuice()

// Part II:
// - We use an array ingredients to store all ingredients
// - addIngredients() pushes ingredients into the array
// - displayJuice() shows the full list of ingredients
// - addIngredients() is invoked twice to reach 6 ingredients
