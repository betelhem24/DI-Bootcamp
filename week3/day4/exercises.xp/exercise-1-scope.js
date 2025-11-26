// Exercise 1 : Scope

// #1
function funcOne() {
    let a = 5;
    if (a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1
funcOne();

// #1.2
// if i Use const here it would cause an error because const cannot be changed.

// #2
let a = 0;

function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1
funcThree();
funcTwo();
funcThree();

// #2.2
// Using const would cause an error because const cannot be changed.


// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1
funcFour();
funcFive();


// #4
let a = 1;

function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}

// #4.1
funcSix();

// #4.2
// Using const still works because this a is not changed.


// #5
let a = 2;

if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}

alert(`outside of the if block ${a}`);

// #5.2
// Using const works the same because each const is in its own block.
