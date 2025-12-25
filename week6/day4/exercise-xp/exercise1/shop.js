// shop.js - CommonJS syntax

const products = require('./products');

function findProduct(productName) {
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
    
    if (product) {
        console.log(`Product Found:`);
        console.log(`Name: ${product.name}`);
        console.log(`Price: $${product.price}`);
        console.log(`Category: ${product.category}`);
        console.log('-------------------');
    } else {
        console.log(`Product "${productName}" not found.`);
        console.log('-------------------');
    }
}

// Test the function with different product names
findProduct("Laptop");
findProduct("Chair");
findProduct("Phone");
findProduct("Mouse"); // This won't be found