

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
