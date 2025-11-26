// Exercise 7 – My Book List

const allBooks = [
    {title: "Harry Potter", author: "JK Rowling", image: "https://images-na.ssl-images-amazon.com/images/I/81iqZ2HHD-L.jpg", alreadyRead: true},
    {title: "The Hobbit", author: "J.R.R. Tolkien", image: "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg", alreadyRead: false}
];

const section = document.querySelector(".listBooks");

allBooks.forEach(book => {
    const div = document.createElement("div");
    const p = document.createElement("p");
    p.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) p.style.color = "red";
    
    const img = document.createElement("img");
    img.src = book.image;
    img.style.width = "100px";
    
    div.appendChild(p);
    div.appendChild(img);
    section.appendChild(div);
});
