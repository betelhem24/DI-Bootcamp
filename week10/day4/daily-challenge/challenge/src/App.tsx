import React, { useState } from 'react';
import List from './List';
import './App.css';

// Define Book Type
interface Book {
    id: number;
    title: string;
    author: string;
}

function App() {
    const [books, setBooks] = useState<Book[]>([
        { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
        { id: 2, title: '1984', author: 'George Orwell' },
        { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    ]);

    const [newBookTitle, setNewBookTitle] = useState('');
    const [newBookAuthor, setNewBookAuthor] = useState('');

    const addBook = (e: React.FormEvent) => {
        e.preventDefault();
        if (newBookTitle.trim() && newBookAuthor.trim()) {
            const newBook: Book = {
                id: Date.now(),
                title: newBookTitle,
                author: newBookAuthor,
            };
            setBooks([...books, newBook]);
            setNewBookTitle('');
            setNewBookAuthor('');
        }
    };

    return (
        <div className="app-container">
            <header className="app-header">
                <h1>My Book List</h1>
                <p>Built with TypeScript Generics</p>
            </header>

            <main className="book-app">
                <form onSubmit={addBook} className="add-book-form">
                    <input
                        type="text"
                        value={newBookTitle}
                        onChange={(e) => setNewBookTitle(e.target.value)}
                        placeholder="Book Title"
                        className="book-input"
                    />
                    <input
                        type="text"
                        value={newBookAuthor}
                        onChange={(e) => setNewBookAuthor(e.target.value)}
                        placeholder="Author"
                        className="book-input"
                    />
                    <button type="submit" className="btn-add">Add Book</button>
                </form>

                <div className="book-list-container">
                    <h2>Reading List</h2>
                    <List
                        items={books}
                        renderItem={(book) => (
                            <div className="book-card">
                                <h3>{book.title}</h3>
                                <p>by {book.author}</p>
                                <small>ID: {book.id}</small>
                            </div>
                        )}
                    />
                </div>
            </main>
        </div>
    );
}

export default App;
