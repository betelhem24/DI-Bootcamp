# Week 10 Day 4 Daily Challenge - Generic List Component

## Project Overview

A React application demonstrating the power of **TypeScript Generics**. It features a reusable `List<T>` component that can render any type of data, implemented here as a "Book List" application.

## Features

- **Generic List Component**: `List<T>` accepts an array of items and a render function, decoupling the list logic from the rendering logic.
- **Strong Typing**: Utilizes TypeScript interfaces (`Book`) and generics to ensure type safety.
- **State Management**: Uses `useState` to manage the list of books dynamically.

## Technologies Used

- React (Vite)
- TypeScript
- CSS3

## Installation

```bash
cd week10/day4/daily-challenge/challenge
npm install
npm run dev
```

## Implementation Details

- **`src/List.tsx`**: Defines the generic component `List<T>`.
- **`src/App.tsx`**: Consumes `List` with `Book` objects.

## License

Educational Project - DI Bootcamp
