//Exercise 2: Display Student Info




// Function that takes an object as a parameter
function displayStudentInfo({ first, last }) {
    // Using destructuring inside the function parameters
    return `Your full name is ${first} ${last}`;
}

// Test the function
console.log(displayStudentInfo({ first: 'Elie', last: 'Schoppik' }));
// Expected output: 'Your full name is Elie Schoppik'
