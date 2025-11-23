// Exercises XP

// Exercise 1 : List of people
// const people = ["Greg", "Mary", "Devon", "James"];

// 1. Create the initial array
let people = ['Greg', 'Mary', 'Devon', 'James'];

// 2. Remove "Greg"
let deletedItem = people.splice(0, 1);
console.log(deletedItem);
console.log(people);

// 3. Replace "James" with "Jason"
let replacedItem = people.splice(2, 1, 'Jason');
console.log(replacedItem);
console.log(people);

// 4. Add your name to the end
people.push('Betty');
console.log(people);

// 5. Find the index of "Mary"
let MaryIndex = people.indexOf("Mary");
console.log(MaryIndex);

// 6. Make a copy excluding "Mary" and "Betty"
let peopleCopy = people.slice(1, 3);
console.log(peopleCopy);

// 7. Find the index of "Foo"
let FooIndex = people.indexOf('Foo');
console.log(FooIndex);

// 8. Store the last element in a variable
let last = people[people.length - 1];
console.log(last);


// Exercise 2 : Your favorite colors


// 1. Create an array of five favorite colors
let colors = ["grey", "black", "purple", "brown", "blue"];

// 2. Loop through the colors array and log "My #1 choice is ..."
for (let i = 0; i < colors.length; i++) {
    console.log("My #" + (i + 1) + " choice is " + colors[i]);
}

// 3. Bonus: loop with ordinal suffixes
let suffixes = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i < colors.length; i++) {
    console.log("My " + (i + 1) + suffixes[i] + " choice is " + colors[i]);
}

// Exercise 3: Repeat the question

// 1. Load prompt-sync so we can ask for user input in Node.js
const prompt = require('prompt-sync')(); 

// 2. Initialize a variable to store the user's number
let userNumber = 0; 

// 3. Use a while loop to keep asking until the number is 10 or greater
while (userNumber < 10) {
    userNumber = Number(prompt("Enter a number: "));
}

// 4. Print a thank-you message after the user enters a valid number
console.log("Thank you! You entered:", userNumber);



// Exercise 4: Building Management

// 1. Create the building object
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
};

// 2. Console.log the number of floors
console.log("Number of floors:", building.numberOfFloors);

// 3. Console.log the number of apartments on the first and third floors
console.log("Apartments on first floor:", building.numberOfAptByFloor.firstFloor);
console.log("Apartments on third floor:", building.numberOfAptByFloor.thirdFloor);

// 4. Console.log the name of the second tenant
let secondTenant = building.nameOfTenants[1]; // arrays start at index 0
console.log("Second tenant name:", secondTenant);

// 5. Console.log the number of rooms the second tenant has
let roomsOfSecondTenant = building.numberOfRoomsAndRent.dan[0]; 
// Index 0 = number of rooms, Index 1 = rent
console.log("Number of rooms:", roomsOfSecondTenant);

// 6. Get Sarah's rent
let sarahRent = building.numberOfRoomsAndRent.sarah[1]; // Index 1 = rent

// 7. Get David's rent
let davidRent = building.numberOfRoomsAndRent.david[1]; // Index 1 = rent

// 8. Get Dan's rent
let danRent = building.numberOfRoomsAndRent.dan[1]; // Index 1 = rent

// 9. Check if Sarah's rent + David's rent > Dan's rent
if (sarahRent + davidRent > danRent) {
    // 10. Increase Dan's rent to 1200 if condition is true
    building.numberOfRoomsAndRent.dan[1] = 1200;
    console.log("Dan's rent was increased to:", building.numberOfRoomsAndRent.dan[1]);
} else {
    // 11. Otherwise, keep Dan's rent the same
    console.log("Dan's rent stays the same:", danRent);
}


// Exercise 5 : Family

// 1. Create an object called 'family'
let family = {
    father: "John",
    mother: "Jane",
    brother: "Alex",
    sister: "Emma"
};

// 2. Log the keys of the object
for (let member in family) {
    console.log(member); // father, mother, brother, sister
}

// 3. Log the values of the object
for (let member in family) {
    console.log(family[member]); // John, Jane, Alex, Emma
}


// Exercise 6 : Rudolf

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
};

let sentence = '';  // store the sentence

for (let key in details) {
  sentence += details[key] + ' ';  // add each value with a space
}

console.log(sentence.trim());  // print the final sentence


// Exercise 7 : Secret Group

// Exercise 7: Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"]; // Step 1: Array of friends

const firstLetters = names.map(function(name) {
  return name[0]; // Step 2: Get first letter of each name
});

const sortedLetters = firstLetters.sort(); // Step 3: Sort letters A-Z

const societyName = sortedLetters.join(''); // Step 4: Combine letters into a string

console.log(societyName); // Step 5: Print secret society name


// Exercises XP Gold

// Exercise 1: Divisible by three

// 1: Create an array of numbers
let numbers = [123, 8409, 100053, 333333333, 7]; 

// 2: Loop through each number in the array
for (let i = 0; i < numbers.length; i++) { 
  // 3: Check if the current number is divisible by 3
  if (numbers[i] % 3 === 0) { 
    // 4: If divisible, print true
    console.log(true); 
  } else {
    // 5: If not divisible, print false
    console.log(false); 
  }
}


// Exercise 2 : Attendance

// Step 1: Create the guest list object
let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
};

// Step 2: Prompt the student for their name
let studentName = prompt("What is your name?");

// Step 3: Check if the name is in the guest list
if (studentName in guestList) {
  // Step 3a: If name exists, print greeting with country
  console.log("Hi! I'm " + studentName + ", and I'm from " + guestList[studentName] + ".");
} else {
  // Step 3b: If name does not exist, print guest message
  console.log("Hi! I'm a guest.");
}


// Exercise 3 : Playing with numbers

// Exercise 3: Playing with numbers
let age = [20, 5, 12, 43, 98, 55];

// 1. Sum of all numbers
let sum = 0;
for (let i = 0; i < age.length; i++) {
    sum += age[i]; // Add each age to sum
}
console.log("Sum of all ages:", sum);

// 2. Highest age
let highest = age[0];
for (let i = 1; i < age.length; i++) {
    if (age[i] > highest) {
        highest = age[i]; // Update highest if current age is bigger
    }
}
console.log("Highest age:", highest);



// Exercises XP Ninja

// Exercise 1 : Checking the BMI

// Step 1: Create the first person object
const person1 = {
  fullName: "Alice Johnson",
  mass: 68,
  height: 1.65,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// Step 2: Create the second person object
const person2 = {
  fullName: "Bob Smith",
  mass: 85,
  height: 1.8,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

// Step 3: Function to compare BMIs
function compareBMI(personA, personB) {
  const bmiA = personA.calcBMI();
  const bmiB = personB.calcBMI();

  if (bmiA > bmiB) {
    console.log(personA.fullName + " has the higher BMI: " + bmiA);
  } else if (bmiB > bmiA) {
    console.log(personB.fullName + " has the higher BMI: " + bmiB);
  } else {
    console.log(personA.fullName + " and " + personB.fullName + " have the same BMI: " + bmiA);
  }
}

// Step 4: Call the comparison function
compareBMI(person1, person2);


// Exercise 2 : Grade Average

// Exercise 2: Grade Average

// Function to calculate and display average and pass/fail
function findAvg(gradesList) {
    let sum = 0; // total of grades
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i]; // add each grade to sum
    }

    let average = sum / gradesList.length; // calculate average
    console.log("The average is: " + average);

    if (average >= 65) {
        console.log("You passed!");
    } else {
        console.log("You failed and must repeat the course.");
    }
}

// Bonus: Split into two functions

// Function to calculate average
function calculateAverage(gradesList) {
    let sum = 0;
    for (let i = 0; i < gradesList.length; i++) {
        sum += gradesList[i];
    }
    return sum / gradesList.length;
}

// Function to print result, calls calculateAverage
function printResult(gradesList) {
    let average = calculateAverage(gradesList);
    console.log("The average is: " + average);

    if (average >= 65) {
        console.log("You passed!");
    } else {
        console.log("You failed and must repeat the course.");
    }
}

// Example usage
findAvg([70, 80, 90]);
printResult([50, 60, 70]);
