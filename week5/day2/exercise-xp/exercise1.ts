// Exercise 1: Class with Access Modifiers

class Person {

    private ssn: string;      
    protected age: number;     
    public name: string;       

    constructor(name: string, age: number, ssn: string) {
        this.name = name;
        this.age = age;
        this.ssn = ssn;
    }

    public getSSN(): string {
        return this.ssn;
    }

    public setAge(newAge: number): void {
        this.age = newAge;
    }

    public getAge(): number {
        return this.age;
    }
}

const john = new Person("John Doe", 30, "123-45-6789");

console.log(john.name);
console.log(john.getSSN());
console.log(john.getAge());

john.setAge(31);
console.log(john.getAge());
