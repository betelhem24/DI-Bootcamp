// Part II: Juice Bar with array of ingredients

// Outer function makeJuice receives 1 argument: size
function makeJuice(size) {
  // Create an empty array to store ingredients
  let ingredients = [];

  // Inner function addIngredients receives 3 ingredients
  function addIngredients(ingredient1, ingredient2, ingredient3) {
    // Push the 3 ingredients into the ingredients array
    ingredients.push(ingredient1, ingredient2, ingredient3);
  }

  // Inner function displayJuice to show the final juice
  function displayJuice() {
    // Display the sentence with all ingredients in the array
    alert("The client wants a " + size + " juice, containing " + ingredients.join(", ") + ".");
  }

  // Invoke addIngredients TWICE because the client wants 6 ingredients
  addIngredients("apple", "banana", "orange");  // first 3 ingredients
  addIngredients("mango", "kiwi", "grape");    // next 3 ingredients

  // Invoke displayJuice ONCE to show the final juice
  displayJuice();
}

// Invoke the outer function in the global scope
makeJuice("large");
