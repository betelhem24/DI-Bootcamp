var Product = /** @class */ (function () {
    function Product(id, name, price) {
        this.id = id; // readonly can be assigned only here
        this.name = name;
        this.price = price;
    }
    // Returns product name and price as a formatted string
    Product.prototype.getProductInfo = function () {
        return "".concat(this.name, " costs $").concat(this.price);
    };
    return Product;
}());
// Create a new Product instance
var item = new Product(101, "Laptop", 1200);
// Access product info
console.log(item.getProductInfo());
console.log(item.id);
