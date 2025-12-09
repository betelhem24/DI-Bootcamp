// Daily Challenge: Building a Library System with TypeScript Classes and Interfaces
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
// Step 2: Class Library
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
    };
    Library.prototype.getBookDetails = function (isbn) {
        return this.books.find(function (book) { return book.isbn === isbn; });
    };
    Library.prototype.getAllBooks = function () {
        return this.books;
    };
    return Library;
}());
// Step 3: Class DigitalLibrary
var DigitalLibrary = /** @class */ (function (_super) {
    __extends(DigitalLibrary, _super);
    function DigitalLibrary(website) {
        var _this = _super.call(this) || this;
        _this.website = website;
        return _this;
    }
    DigitalLibrary.prototype.listBooks = function () {
        return this.getAllBooks().map(function (book) { return book.title; });
    };
    return DigitalLibrary;
}(Library));
// Step 4: Usage
var myDigitalLibrary = new DigitalLibrary("https://mybooks.com");
myDigitalLibrary.addBook({
    title: "Be Kind",
    author: "Orite",
    isbn: "9876",
    publishedYear: 2024,
    genre: "Female"
});
myDigitalLibrary.addBook({
    title: "The Great Code",
    author: "John Smith",
    isbn: "12345",
    publishedYear: 2021
});
var bookDetails = myDigitalLibrary.getBookDetails("9876");
console.log("Book Details:", bookDetails);
console.log("All Book Titles:", myDigitalLibrary.listBooks());
