import { createSlice, createSelector, PayloadAction } from '@reduxjs/toolkit';

interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
}

interface BooksState {
    books: Book[];
    selectedGenre: string;
}

const initialState: BooksState = {
    books: [
        { id: 1, title: 'The Shining', author: 'Stephen King', genre: 'Horror' },
        { id: 2, title: 'It', author: 'Stephen King', genre: 'Horror' },
        { id: 3, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'Fantasy' },
        { id: 4, title: 'Harry Potter', author: 'J.K. Rowling', genre: 'Fantasy' },
        { id: 5, title: 'Dune', author: 'Frank Herbert', genre: 'Science Fiction' },
        { id: 6, title: 'Neuromancer', author: 'William Gibson', genre: 'Science Fiction' },
        { id: 7, title: 'Foundation', author: 'Isaac Asimov', genre: 'Science Fiction' },
        { id: 8, title: 'Dracula', author: 'Bram Stoker', genre: 'Horror' },
    ],
    selectedGenre: 'All',
};

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {
        setGenre: (state, action: PayloadAction<string>) => {
            state.selectedGenre = action.payload;
        },
    },
});

export const { setGenre } = booksSlice.actions;

// Selectors
export const selectBooks = (state: { books: BooksState }) => state.books.books;
export const selectSelectedGenre = (state: { books: BooksState }) => state.books.selectedGenre;

// Memoized Selectors for specific genres
export const selectHorrorBooks = createSelector(
    [selectBooks],
    (books) => books.filter((book) => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
    [selectBooks],
    (books) => books.filter((book) => book.genre === 'Fantasy')
);

export const selectScienceFictionBooks = createSelector(
    [selectBooks],
    (books) => books.filter((book) => book.genre === 'Science Fiction')
);

// Dynamic Selector based on current selection
export const selectBooksByCurrentGenre = createSelector(
    [selectBooks, selectSelectedGenre],
    (books, genre) => {
        if (genre === 'All') return books;
        return books.filter((book) => book.genre === genre);
    }
);

export default booksSlice.reducer;
