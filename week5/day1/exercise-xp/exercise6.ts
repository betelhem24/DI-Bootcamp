// Exercise 6: Object Type Annotations

type person = {
    name: string;
    age: number;

};

function createPerson(name: string, age: number): person {
    return{name, age};
} 

const person1 = createPerson("Aliya", 16);

console.log(person1);
