# Week 10 Day 2 - Exercise XP: Redux Thunk User Data Fetcher

## Project Overview

A React-Redux application that fetches and displays user data from an API using Redux Thunk for asynchronous logic. This project demonstrates the implementation of Redux Toolkit with TypeScript for state management and async operations.

## Technologies Used

- React 18
- TypeScript
- Vite
- Redux Toolkit
- React-Redux
- JSONPlaceholder API

## Features

- ✅ Fetch user data from API using Redux Thunk
- ✅ Display user information in a styled card
- ✅ Loading states during API calls
- ✅ Error handling for failed requests
- ✅ Clear functionality to reset state
- ✅ TypeScript for type safety
- ✅ Modern UI with gradient design

## Installation

```bash
cd week10/day2/exercise-xp/exercise
npm install
npm run dev
```

## Project Structure

```
src/
├── store.ts          # Redux store configuration
├── userSlice.ts      # User slice with thunk actions
├── UserData.tsx      # Main component
├── UserData.css      # Component styles
├── App.tsx           # App with Redux Provider
└── App.css           # Global styles
```

## Key Concepts Demonstrated

### 1. Redux Store Setup
- Configured with `configureStore` from Redux Toolkit
- TypeScript types for RootState and AppDispatch

### 2. Redux Slice with Thunk
- `createSlice` for user state management
- `createAsyncThunk` for async API calls
- Proper handling of pending, fulfilled, and rejected states

### 3. React-Redux Hooks
- `useSelector` to access state
- `useDispatch` to dispatch actions
- TypeScript typing for hooks

### 4. Error Handling
- Try-catch in thunk action
- Error state in Redux slice
- User-friendly error messages

## API Endpoint

Uses JSONPlaceholder API:
- `https://jsonplaceholder.typicode.com/users/{id}`
- Valid user IDs: 1-10

## Usage

1. Enter a user ID (1-10) in the input field
2. Click "Fetch User" to retrieve data
3. View the displayed user information
4. Click "Clear" to reset the state

## License

Educational project - DI Bootcamp
