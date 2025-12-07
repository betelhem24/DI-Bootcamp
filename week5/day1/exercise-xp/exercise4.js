// Exercise 4: Control Flow with if...else
function checkNumber(num) {
    if (num > 0) {
        return "Positive";
    }
    else if (num < 0) {
        return "Negative";
    }
    else {
        return "Zero";
    }
}
// Test the function
console.log(checkNumber(2));
console.log(checkNumber(-6));
console.log(checkNumber(0));
