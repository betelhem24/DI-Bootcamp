import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    setGenre,
    selectBooksByCurrentGenre,
    selectSelectedGenre
} from './booksSlice';
import { RootState } from '../../app/store';

const BookList: React.FC = () => {
    const dispatch = useDispatch();
    const books = useSelector((state: RootState) => selectBooksByCurrentGenre(state));
    const currentGenre = useSelector((state: RootState) => selectSelectedGenre(state));

    const genres = ['All', 'Horror', 'Fantasy', 'Science Fiction'];

    return (
        <div className="book-list-container">
            <h2>Book Inventory</h2>

            <div className="genre-selector">
                <label>Filter by Genre: </label>
                <select
                    value={currentGenre}
                    onChange={(e) => dispatch(setGenre(e.target.value))}
                >
                    {genres.map((genre) => (
                        <option key={genre} value={genre}>{genre}</option>
                    ))}
                </select>
            </div>

            <ul className="book-list">
                {books.map((book) => (
                    <li key={book.id} className="book-item">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author}</p>
                        <span className="genre-tag">{book.genre}</span>
                    </li>
                ))}
            </ul>

            {books.length === 0 && <p>No books found for this genre.</p>}
        </div>
    );
};

export default BookList;
