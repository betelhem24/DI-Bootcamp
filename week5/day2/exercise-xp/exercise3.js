//Exercise 3: Class Inheritance
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Base class representing a general person
var Person = /** @class */ (function () {
    // Constructor to initialize name and age
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    // Method to display basic info
    Person.prototype.getInfo = function () {
        return "".concat(this.name, " is ").concat(this.age, " years old.");
    };
    return Person;
}());
// Subclass representing a student, extending Person
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    // Constructor for Student, calls parent constructor with super()
    function Student(name, age, studentId) {
        var _this = _super.call(this, name, age) || this; // Call base class constructor
        _this.studentId = studentId; // Initialize subclass property
        return _this;
    }
    // Method to display full student info
    Student.prototype.getStudentInfo = function () {
        // Reuse getInfo() from base class
        return "".concat(this.getInfo(), " Student ID: ").concat(this.studentId);
    };
    return Student;
}(Person));
// Create an instance of Student
var student1 = new Student("Alice", 20, 12345);
// Access methods
console.log(student1.getInfo()); // From base class
console.log(student1.getStudentInfo()); // From subclass
