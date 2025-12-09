class Product {

    readonly id: number;      // cannot be changed after initialization
    public name: string;
    public price: number;

    constructor(id: number, name: string, price: number) {
        this.id = id;         // readonly can be assigned only here
        this.name = name;
        this.price = price;
    }

    // Returns product name and price as a formatted string
    public getProductInfo(): string {
        return `${this.name} costs $${this.price}`;
    }
}

// Create a new Product instance
const item = new Product(101, "Laptop", 1200);

// Access product info
console.log(item.getProductInfo());
console.log(item.id);  
