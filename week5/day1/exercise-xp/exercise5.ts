// Exercise 5: Tuple Types


//Function declaration: getDetails takes two parameters: name (string) and age (number)
function getDetails(name:string, age:number): [string, number, string] {

    // // Create a greeting message using template literals
    let message = `Hello, ${name}! You are ${age} years old.`;

     // Return a tuple containing:
    return [name,age, message];
}

// Call the function and log the tuple
const details = getDetails("Alice", 25);

console.log(details);