// Exercise XP

// Exercise 1 : Find the numbers divisible by 23

function displayNumbersDivisible() {
    let sum = 0; // store total sum
    for (let i = 0; i <= 500; i++) {
        if (i % 23 === 0) {
            console.log(i); // print divisible number
            sum += i;       // add to sum
        }
    }
    console.log("Sum:", sum); // print total sum
}

displayNumbersDivisible();

// Bonus: Function with a divisor parameter
function displayNumbersDivisible(divisor) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}

// Example calls
displayNumbersDivisible(3);
displayNumbersDivisible(45);


// Exercise 2 : Shopping List


// STEP 1: Add the stock and prices objects

// This object shows how many of each item we have in stock
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry": 1
}

// This object shows the price of each item
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry": 10
}

// STEP 2: Create a shoppingList array
const shoppingList = ["banana", "orange", "apple"];


// STEP 3: Create myBill() function
function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item]; // add price to total
            stock[item] -= 1;      // bonus: decrease stock
        }
    }
    return total;
}


// STEP 4: Call myBill() function
console.log(myBill()); // Show total price
console.log(stock);    // Show updated stock


// Exercise 3 : What’s in my wallet ?

// Step 1: Create the function
function changeEnough(itemPrice, amountOfChange) {

    // Step 2: Define the value of each coin
    const quarter = 0.25;
    const dime = 0.10;
    const nickel = 0.05;
    const penny = 0.01;

    // Step 3: Calculate total money in the wallet
    let total =
        amountOfChange[0] * quarter +
        amountOfChange[1] * dime +
        amountOfChange[2] * nickel +
        amountOfChange[3] * penny;

    // Step 4: Compare total with item price and return true/false
    return total >= itemPrice;
}

// Step 5: Test examples
console.log(changeEnough(4.25, [25, 20, 5, 0]));  // true
console.log(changeEnough(14.11, [2, 100, 0, 0])); // false
console.log(changeEnough(0.75, [0, 0, 20, 5]));   // true


// Exercise 4 : Vacations Costs

// STEP 1: hotelCost()
function hotelCost() {
    let nights = prompt("How many nights would you like to stay in the hotel?");
    while (isNaN(nights) || nights === "" || nights === null) {
        nights = prompt("Please enter a valid number of nights:");
    }
    nights = Number(nights);
    return nights * 140;
}

// STEP 2: planeRideCost()
function planeRideCost() {
    let destination = prompt("What is your destination?");
    while (!isNaN(destination) || destination === "" || destination === null) {
        destination = prompt("Please enter a valid destination (letters only):");
    }
    destination = destination.toLowerCase();
    if (destination === "london") return 183;
    else if (destination === "paris") return 220;
    else return 300;
}

// STEP 3: rentalCarCost()
function rentalCarCost() {
    let days = prompt("How many days would you like to rent the car?");
    while (isNaN(days) || days === "" || days === null) {
        days = prompt("Please enter a valid number of days:");
    }
    days = Number(days);
    let cost = days * 40;
    if (days > 10) cost *= 0.95; // 5% discount
    return cost;
}

// STEP 4: totalVacationCost()
function totalVacationCost() {
    let hotel = hotelCost();
    let plane = planeRideCost();
    let car = rentalCarCost();

    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    return hotel + plane + car;
}

// Call totalVacationCost()
totalVacationCost();


