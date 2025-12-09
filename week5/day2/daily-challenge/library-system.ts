// Daily Challenge: Building a Library System with TypeScript Classes and Interfaces


// Step 1: Interface Book
interface Book {
    title: string;
    author: string;
    isbn: string;
    publishedYear: number;
    genre?: string;              //? → Means optional, not required.
}

// Step 2: Class Library
class Library {
    private books: Book[] = [];

    public addBook(book: Book): void {
        this.books.push(book);
    }

    public getBookDetails(isbn: string): Book | undefined {
        return this.books.find(book => book.isbn === isbn);
    }

    protected getAllBooks(): Book[] {
        return this.books;
    }
}

// Step 3: Class DigitalLibrary
class DigitalLibrary extends Library {
    public readonly website: string;

    constructor(website: string) {
        super();
        this.website = website;
    }

    public listBooks(): string[] {
        return this.getAllBooks().map(book => book.title);
    }
}

// Step 4: Usage
const myDigitalLibrary = new DigitalLibrary("https://mybooks.com");

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

const bookDetails = myDigitalLibrary.getBookDetails("9876");
console.log("Book Details:", bookDetails);

console.log("All Book Titles:", myDigitalLibrary.listBooks());


