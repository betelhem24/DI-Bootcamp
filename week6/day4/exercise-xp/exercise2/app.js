// app.js - ES6 module syntax

import persons from './data.js';

function calculateAverageAge(peopleArray) {
    if (peopleArray.length === 0) {
        console.log("No persons in the array.");
        return 0;
    }
    
    const totalAge = peopleArray.reduce((sum, person) => sum + person.age, 0);
    const averageAge = totalAge / peopleArray.length;
    
    return averageAge;
}

// Display all persons
console.log("All Persons:");
persons.forEach(person => {
    console.log(`${person.name} - Age: ${person.age}, Location: ${person.location}`);
});

console.log('\n-------------------');

// Calculate and display average age
const avgAge = calculateAverageAge(persons);
console.log(`Average Age: ${avgAge.toFixed(2)} years`);