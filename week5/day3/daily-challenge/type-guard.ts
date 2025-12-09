// Type Guard with Union Types

// Define the types with a 'type' discriminator
type User = { type: 'user'; name: string; age: number };
type Product = { type: 'product'; id: number; price: number };
type Order = { type: 'order'; orderId: string; amount: number };

// Function to process an array of mixed types
function handleData(items: (User | Product | Order)[]): string[] {
  const results: string[] = []; // Array to store output messages

  for (const item of items) {
    if (item.type === 'user') {
      // Handle User type
      results.push(`Hello ${item.name}, you are ${item.age} years old.`);
    } else if (item.type === 'product') {
      // Handle Product type
      results.push(`Product ID: ${item.id}, Price: $${item.price}`);
    } else if (item.type === 'order') {
      // Handle Order type
      results.push(`Order ID: ${item.orderId}, Amount: $${item.amount}`);
    } else {
      // Handle unexpected type
      results.push('Unknown item type.');
    }
  }

  return results; // Return array of messages
}

// Example usage
const mixedData: (User | Product | Order)[] = [
  { type: 'user', name: 'Alice', age: 30 },
  { type: 'product', id: 101, price: 49.99 },
  { type: 'order', orderId: 'ORD123', amount: 150 },
];

console.log(handleData(mixedData));
