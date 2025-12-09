// Type Guard with Union Types
// Function to process an array of mixed types
function handleData(items) {
    var results = []; // Array to store output messages
    for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
        var item = items_1[_i];
        if (item.type === 'user') {
            // Handle User type
            results.push("Hello ".concat(item.name, ", you are ").concat(item.age, " years old."));
        }
        else if (item.type === 'product') {
            // Handle Product type
            results.push("Product ID: ".concat(item.id, ", Price: $").concat(item.price));
        }
        else if (item.type === 'order') {
            // Handle Order type
            results.push("Order ID: ".concat(item.orderId, ", Amount: $").concat(item.amount));
        }
        else {
            // Handle unexpected type
            results.push('Unknown item type.');
        }
    }
    return results; // Return array of messages
}
// Example usage
var mixedData = [
    { type: 'user', name: 'Alice', age: 30 },
    { type: 'product', id: 101, price: 49.99 },
    { type: 'order', orderId: 'ORD123', amount: 150 },
];
console.log(handleData(mixedData));
