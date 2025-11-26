// Part I: Basic nested functions
function makeJuice(size) {
    // Inner function receives 3 ingredients and displays the sentence
    function addIngredients(ing1, ing2, ing3) {
        const sentence = `The client wants a ${size} juice, containing ${ing1}, ${ing2}, ${ing3}.`;
        document.getElementById('juice-output').innerHTML = sentence;
    }

    // Invoke the inner function ONCE
    addIngredients("apple", "banana", "orange");
}

// Invoke the outer function in the global scope
makeJuice("medium");


// Part II: Using an ingredients array and multiple inner function calls
function makeJuiceAdvanced(size) {
    const ingredients = []; // Empty array to store ingredients

    // Inner function to add 3 ingredients to the array
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }

    // Inner function to display juice order
    function displayJuice() {
        const sentence = `The client wants a ${size} juice, containing ${ingredients.join(", ")}.`;
        document.getElementById('juice-output').innerHTML = sentence;
    }

    // Add ingredients TWICE (total 6)
    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "pineapple", "kiwi");

    // Display the juice order
    displayJuice();
}

// Invoke the advanced function globally
makeJuiceAdvanced("large");

// Explanation:
// - makeJuice(size) defines an inner function addIngredients() and calls it once (Part I)
// - makeJuiceAdvanced(size) creates an empty ingredients array, inner functions addIngredients() and displayJuice()
// - addIngredients() pushes 3 ingredients each time, called twice → total 6 ingredients
// - displayJuice() outputs the final sentence in the DOM
// - Nested functions allow managing scope and using shared variables (ingredients array)
