// Exercise 6: Intersection Types and Type Guards

type Person = { name: string; age: number }; // Person type
type Job = { position: string; department: string }; // Job type

type Employee = Person & Job; // Combine Person and Job

function describeEmployee(employee: Employee): string {
  if (employee.position === "Manager") {
    return `${employee.name} is a ${employee.position} in the ${employee.department} department, managing teams and projects.`;
  } else if (employee.position === "Developer") {
    return `${employee.name} is a ${employee.position} in the ${employee.department} department, writing and maintaining code.`;
  } else {
    return `${employee.name} works as a ${employee.position} in the ${employee.department} department.`;
  }
}

// Example usage
const emp1: Employee = { name: "Alice", age: 30, position: "Manager", department: "HR" };
const emp2: Employee = { name: "Bob", age: 25, position: "Developer", department: "IT" };

console.log(describeEmployee(emp1)); // Manager description
console.log(describeEmployee(emp2)); // Developer description
