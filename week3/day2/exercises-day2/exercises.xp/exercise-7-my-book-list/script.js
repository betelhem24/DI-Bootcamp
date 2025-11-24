// Step 2: Create an array called allBooks with 2 book objects
const allBooks = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://upload.wikimedia.org/wikipedia/en/6/6b/Harry_Potter_and_the_Philosopher%27s_Stone_Book_Cover.jpg",
        alreadyRead: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://upload.wikimedia.org/wikipedia/en/4/4a/TheHobbit_FirstEdition.jpg",
        alreadyRead: false
    }
];

// Step 3: Select the section to display books
const listSection = document.querySelector('.listBooks');

// Step 4: Loop through allBooks and display each book
allBooks.forEach((book) => {
    const bookDiv = document.createElement('div'); // Create a div for each book

    const bookInfo = document.createElement('p'); // Create paragraph with title and author
    bookInfo.textContent = `${book.title} written by ${book.author}`;
    if (book.alreadyRead) {
        bookInfo.style.color = 'red'; // Step 4: If already read, make text red
    }

    const bookImage = document.createElement('img'); // Create image element
    bookImage.src = book.image;
    bookImage.style.width = '100px'; // Set width to 100px

    bookDiv.appendChild(bookInfo);  // Add paragraph to div
    bookDiv.appendChild(bookImage); // Add image to div

    listSection.appendChild(bookDiv); // Add div to section
});
