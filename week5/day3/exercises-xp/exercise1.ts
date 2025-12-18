// Define the Person type
type Person = {
  name: string;
  age: number;
};

// Define the Address type
type Address = {
  street: string;
  city: string;
};

type PersonWithAddress = Person & Address;

const personWithAddress: PersonWithAddress = {
  name: 'John Doe',    
  age: 30,            
  street: '123 Main St', 
  city: 'Anytown',      
};

console.log(personWithAddress);
