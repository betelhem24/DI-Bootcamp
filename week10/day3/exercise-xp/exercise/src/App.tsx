import React from 'react';
import BookList from './features/books/BookList';
import './App.css';

function App() {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>Redux Bookstore</h1>
                <p>Managed with Redux Toolkit & createSelector</p>
            </header>
            <main>
                <BookList />
            </main>
        </div>
    );
}

export default App;
