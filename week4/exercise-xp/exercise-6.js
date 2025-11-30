// Exercise 6 : Challenges

// Comparing arrays
const array1 = [2];
const array2 = [2];
console.log(array1 === array2); // false, different references

// Comparing objects
const objectA = {};
const objectB = {};
console.log(objectA === objectB); // false, different references


// Property values with object references
const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;

console.log(object2.number); // 4
console.log(object3.number); // 4
console.log(object4.number); // 5


// Class Animal
class Animal {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Class Mammal extending Animal
class Mammal extends Animal {
  sound(noise) {
    return `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`;
  }
}

// Create farmerCow object
const farmerCow = new Mammal("Lily", "cow", "brown and white");
console.log(farmerCow.sound("Moooo"));
