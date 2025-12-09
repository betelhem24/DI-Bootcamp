// Exercise 1: Class with Access Modifiers
var Person = /** @class */ (function () {
    function Person(name, age, ssn) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }
    Person.prototype.getSSN = function () {
        return this.ssn;
    };
    Person.prototype.setAge = function (newAge) {
        this.age = newAge;
    };
    Person.prototype.getAge = function () {
        return this.age;
    };
    return Person;
}());
var john = new Person("John Doe", 30, "123-45-6789");
console.log(john.name);
console.log(john.getSSN());
console.log(john.getAge());
john.setAge(31);
console.log(john.getAge());
