//Exercise 3: Class Inheritance

// Base class representing a general person
class Person {
    public name: string;   
    public age: number;    

    // Constructor to initialize name and age
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    // Method to display basic info
    public getInfo(): string {
        return `${this.name} is ${this.age} years old.`;
    }
}

// Subclass representing a student, extending Person
class Student extends Person {
    public studentId: number;  // Additional property for Student

    // Constructor for Student, calls parent constructor with super()
    constructor(name: string, age: number, studentId: number) {
        super(name, age);       // Call base class constructor
        this.studentId = studentId; // Initialize subclass property
    }

    // Method to display full student info
    public getStudentInfo(): string {
        // Reuse getInfo() from base class
        return `${this.getInfo()} Student ID: ${this.studentId}`;
    }
}

// Create an instance of Student
const student1 = new Student("Alice", 20, 12345);

// Access methods
console.log(student1.getInfo());        // From base class
console.log(student1.getStudentInfo()); // From subclass
