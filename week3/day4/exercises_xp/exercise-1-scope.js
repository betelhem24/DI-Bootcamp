// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); // 3
}
// funcOne();

// #1.2 If 'const' was used instead of 'let', error when trying to reassign a.

// #2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}
// funcThree(); // 0
// funcTwo();
// funcThree(); // 5
// #2.2 If 'const', a cannot be reassigned → error in funcTwo()

// #3
function funcFour() {
    window.a = "hello";
}

function funcFive() {
    alert(`inside the funcFive function ${a}`);
}
// funcFour();
// funcFive(); // "hello"

// #4
let b = 1;
function funcSix() {
    let b = "test";
    alert(`inside the funcSix function ${b}`); // "test"
}
// funcSix();
// #4.2 If 'const', same behavior inside function

// #5
let c = 2;
if (true) {
    let c = 5;
    alert(`in the if block ${c}`); // 5
}
alert(`outside of the if block ${c}`); // 2
// #5.2 If 'const', behavior same (block scope), cannot reassign inside block if already const
