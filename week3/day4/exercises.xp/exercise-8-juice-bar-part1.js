// Part I: Juice Bar using nested functions

// Outer function makeJuice receives 1 argument: size
function makeJuice(size) {
  // Inner function addIngredients receives 3 ingredients
  function addIngredients(ingredient1, ingredient2, ingredient3) {
    // Display a sentence on the DOM using alert (you can also use console.log)
    alert("The client wants a " + size + " juice, containing " + ingredient1 + ", " + ingredient2 + ", " + ingredient3 + ".");
  }

  // Invoke the inner function ONCE inside the outer function
  addIngredients("apple", "banana", "orange");
}

// Invoke the outer function in the global scope
makeJuice("medium");
