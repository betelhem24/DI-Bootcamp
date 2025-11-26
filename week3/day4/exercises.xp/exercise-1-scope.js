// Exercise 1: Scope

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    console.log(`inside funcOne: ${a}`); // Prediction: 3
}
// #1.1 Test
funcOne();
// #1.2 If 'const' instead of 'let', error occurs because const cannot be reassigned.

// #2
let a = 0;
function funcTwo() {
    a = 5; // modifies outer 'a'
}
function funcThree() {
    console.log(`inside funcThree: ${a}`); 
}
// #2.1 Test
funcThree(); // 0
funcTwo();
funcThree(); // 5
// #2.2 If 'const a = 0', funcTwo() would throw an error when trying to assign 5.

// #3
function funcFour() {
    window.aGlobal = "hello"; // creates global variable
}
function funcFive() {
    console.log(`inside funcFive: ${aGlobal}`); 
}
// #3.1 Test
funcFour();
funcFive(); // hello

// #4
let aLocal = 1;
function funcSix() {
    let aLocal = "test"; // local variable shadows outer
    console.log(`inside funcSix: ${aLocal}`); // test
}
// #4.1 Test
funcSix();
// #4.2 If 'const aLocal = "test"', works the same, cannot reassign inside function.

// #5
let aBlock = 2;
if (true) {
    let aBlock = 5;
    console.log(`inside if block: ${aBlock}`); // 5
}
console.log(`outside if block: ${aBlock}`); // 2
// #5.2 If 'const aBlock = 5' inside block, works the same; outer 'aBlock' remains 2.
