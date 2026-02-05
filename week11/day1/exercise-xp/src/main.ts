//exercise 1
let hello: string = 'Hello World';
console.log(hello);


// exercise 2
let age: number = 22;
let myName: string = 'Isabella';
console.log(myName, age);


//exercise 3
let id: string | number = "4"


//exercise 4
const num = (a: number): string => {
    if (a > 0) {
        return 'positive'
    } else if (a < 0) {
        return 'negative'
    } else {
        return 'zero'
    }
}
console.log(num(-4));


//exercise 5
type numOrStr = number | string
const add = (a: numOrStr, b: numOrStr): numOrStr => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else {
        return -1
    }
}
console.log(add('2', '2'));


//exercise 6
const getDetails = (age: number, name: string): [string, number, string] => {
    const greeting = `Happy birthday ${name}, you are know ${age}`
    return [name, age, greeting];
}
console.log(getDetails(22, 'Mason'));


// exercise 7
type obj = {
    name: string;
    age: number;
}
const createPerson = (name: string, age: number): object => {
    const person: obj = {
        name: name,
        age: age,
    }

    return person
}
console.log(createPerson('Charlotte', 22));


//exercise 8
const inputElement = document.getElementById("nameInput") as HTMLInputElement;
console.log(inputElement.value);


//exercise 9
function getAction(role: string): string {
    switch (role) {
        case 'admin':
            return 'Full access granted.';

        case 'contributor':
            return 'Limited access granted.';

        case 'viewer':
            return 'Read-only access granted.';

        case 'guest':
            return 'No access granted. Please log in.';

        default:
            return 'Role not recognized. Please contact support.';
    }
}
console.log(getAction('admin'));


//exercise 10
const greet = (name: string = 'amelia'): string => {
    return `welcome ${name}`
}
console.log(greet('ezra'));


//daily challenge
const processInput = (input: number | string | boolean): number | string | boolean => {
    if (typeof input === 'number') {
        return input * input
    } else if (typeof input === 'string') {
        return input.toUpperCase()
    } else if (typeof input === 'boolean') {
        return !input
    } else {
        return -1
    }
}
console.log(processInput(5));


//XP GOLD:

//exercise1
const formatValue = (input: string | number): string => {
    if (typeof input === 'number') {
        return `this the value of the number input: ${String(input)}`
    } else if (typeof input === 'string') {
        return `this the value of the string input: ${input}`
    } else {
        return 'not string or number'
    }
}


//exercise 2
const sumNumbers = (arr: number[]): number => {
    return arr.reduce((total, num) => total + num);
}
console.log(sumNumbers([2, 2, 2, 2]));


//exercise 3
type User = {
    name: string;
    age: number;
}

const user: User = {
    name: 'Elijah',
    age: 22
}

const introduceUser = (UserObj: User): string => {
    return `Happy birthday ${UserObj.name}, you are know ${UserObj.age}`
}
console.log(introduceUser(user));


//exercise 4
const greetUser = (name: string, greet?: string): string => {
    return `${name}, ${(greet || 'welcome')}`
}
console.log(greetUser('Harper'));


//exercise 5
const addNum = (a: numOrStr, b: numOrStr): numOrStr => {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b
    } else if (typeof a === 'string' && typeof b === 'string') {
        return a + b;
    } else {
        return -1
    }
}

