// EXERCISE 1: SCOPE
// Predictions + Explanations

// #1
function funcOne() {
    let a = 5; // a is 5
    if (a > 1) {
        a = 3; // a becomes 3
    }
    alert(`inside the funcOne function ${a}`);
}

// Prediction:
// The alert will show: "inside the funcOne function 3"
// Reason: 'a' starts at 5, condition true → a becomes 3
funcOne();

// What if let becomes const?
// It will cause an error because const cannot be reassigned inside the if block.


// #2
let a = 0; 

function funcTwo() {
    a = 5; // modifies the global variable
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// Prediction:
// funcThree() → alerts: 0
// funcTwo()   → sets a = 5
// funcThree() → alerts: 5
funcThree();
funcTwo();
funcThree();

// If the global variable a was const instead of let:
// funcTwo() would cause an error because const cannot be reassigned.


// #3
function funcFour() {
    window.a = "hello"; // creates/replaces a global variable
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// Prediction:
// funcFour() → sets global a = "hello"
// funcFive() → alerts: "hello"
funcFour();
funcFive();


// #4
let a2 = 1; // renamed to avoid conflict

function funcSix() {
    let a2 = "test"; // local variable, independent from outer a2
    alert(`inside the funcSix function ${a2}`);
}

// Prediction:
// funcSix() → alerts: "test"
// Reason: inner a2 shadows outer a2
funcSix();

// If let inside funcSix is const instead, same result. No reassignment happens.


// #5
let a3 = 2; // renamed to avoid conflicts

if (true) {
    let a3 = 5; // block-scoped variable, separate from outer a3
    alert(`in the if block ${a3}`);
}

alert(`outside of the if block ${a3}`);

// Prediction:
// "in the if block 5"
// "outside of the if block 2"
// Reason: block-scoped let creates separate variable

// If let inside the block is const, same behavior. No reassignment occurs.
