// Exercise 5: Tuple Types

//Function declaration: getDetails takes two parameters: name (string) and age (number)
function getDetails(name, age) {
    // // Create a greeting message using template literals
    var message = "Hello, ".concat(name, "! You are ").concat(age, " years old.");
    // Return a tuple containing:
    return [name, age, message];
}
// Call the function and log the tuple
var details = getDetails("Alice", 25);
console.log(details);
