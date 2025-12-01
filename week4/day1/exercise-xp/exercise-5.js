// Exercise 5 : Dog class

// Base class
class Dog {
  constructor(name) {
    this.name = name; // Sets the name property for Dog instances
  }
}

// Option 1: ❌ Will NOT work
class Labrador1 extends Dog {
  constructor(name, size) {
    this.size = size; // ❌ Error: must call super() before using 'this'
  }
}

// Option 2: ✅ Works
class Labrador2 extends Dog {
  constructor(name, size) {
    super(name); // Calls the parent constructor to set 'name'
    this.size = size; // Sets the 'size' property
  }
}

// Option 3: ❌ Will NOT work
class Labrador3 extends Dog {
  constructor(size) {
    super(name); // ❌ 'name' is undefined here
    this.size = size;
  }
}

// Option 4: ❌ Will NOT work
class Labrador4 extends Dog {
  constructor(name, size) {
    this.name = name; // ❌ Must call super() before using 'this'
    this.size = size;
  }
}

// Testing Option 2
const myLab = new Labrador2('Buddy', 'Large');
console.log(myLab.name); // Buddy
console.log(myLab.size); // Large
