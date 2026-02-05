import { useState } from 'react'
import './App.css'

type BookType = {
    id: number;
    title: string;
    author: string;
}

type RenderListProps = {
    books: BookType[];
};

const booksInitial: BookType[] = [
    {
        id: 1,
        title: "1984",
        author: "George Orwell",
    },
    {
        id: 2,
        title: "Brave New World",
        author: "Aldous Huxley",
    },
    {
        id: 3,
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
    },
    {
        id: 4,
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
    },
    {
        id: 5,
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
    },
];


function renderItem(book: BookType) {
    return (
        <li key={book.id}>
            <p>Title: {book.title}</p>
            <p>Author: {book.author}</p>
        </li>
    )
}

function RenderList({books}: RenderListProps) {
    return (
        <ul>
            {books.map((book) => renderItem(book))}
        </ul>
    )
}

function App() {
    const [books, setBooks] = useState<BookType[]>(booksInitial);
    const [title, setTitle] = useState<string>('');
    const [author, setAuthor] = useState<string>('');

    function addBook(title: string, author: string) {
        const newBook: BookType = {
            id: Date.now(),
            title,
            author,
        };
        setBooks(prevBooks => [...prevBooks, newBook]);
    }
    return (
        <>
            <RenderList books={books} />
            <label htmlFor="title">Title</label>
            <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            <label htmlFor="author">Author</label>
            <input id="author" type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            <button onClick={() => addBook(title, author)}>Add book </button>
        </>
    )
}

export default App
