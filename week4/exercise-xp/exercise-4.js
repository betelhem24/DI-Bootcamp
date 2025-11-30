// Exercise 4: Person Class

// Class definition
class Person {
  constructor(name) {
    this.name = name; // Sets the name property for instances
  }
}

// Creating a new instance of the Person class
const member = new Person('John');

// Checking the type of the instance
console.log(typeof member);
// Expected output: 'object'

// Explanation:
// In JavaScript, instances of classes are objects.
// So even though we used 'class', the typeof operator returns 'object'.
