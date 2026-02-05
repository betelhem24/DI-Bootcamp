# Week 10 Day 3 Exercise XP - Book Inventory Selector

## Project Overview

A Book Inventory Management application built with Redux Toolkit, adhering to Exercise 1 requirements. It implements `createSelector` for performance-optimized filtering of books by genre.

## Features

- **Initial State**: Pre-populated array of books with `id`, `title`, `author`, and `genre`.
- **Selectors**:
  - `selectBooks`: Retrieves all books.
  - `selectHorrorBooks`, `selectFantasyBooks`, `selectScienceFictionBooks`: Memoized selectors created with `createSelector`.
- **UI Interaction**:
  - Dropdown to switch genres.
  - Dynamic filtering of the book list using selectors.
  
## Technologies Used

- React (Vite)
- Redux Toolkit (`createSlice`, `createSelector`)
- React-Redux
- TypeScript

## Installation

```bash
cd week10/day3/exercise-xp/exercise
npm install
npm run dev
```

## Implementation Details

The core logic resides in `src/features/books/booksSlice.ts` where selectors are defined using `createSelector` to ensure efficient state derivation.

## License

Educational Project - DI Bootcamp
