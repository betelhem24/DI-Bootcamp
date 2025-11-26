// Exercise 1 – divisible numbers

function displayNumbersDivisible(divisor = 23) {
    let sum = 0;
    for (let i = 0; i <= 500; i++) {
        if (i % divisor === 0) {
            console.log(i);
            sum += i;
        }
    }
    console.log("Sum:", sum);
}

// Example usage:
displayNumbersDivisible(); // default 23
// Bonus examples:
displayNumbersDivisible(3);
displayNumbersDivisible(45);
