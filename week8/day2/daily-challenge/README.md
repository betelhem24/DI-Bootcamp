# Week 8 Day 2 Daily Challenge - React Form Container

## Project Overview

A React form application that captures user information including personal details, travel destination, and dietary restrictions. The app demonstrates handling form state with controlled components.

## Features

- **Controlled Inputs**: Uses a single `handleChange` function to manage state for text inputs, radio buttons, select dropdowns, and checkboxes.
- **Real-time Display**: Shows the user's entered data immediately below the form.
- **Form Submission**: Submits data via URL query parameters as per requirements.
- **Styled UI**: Custom CSS for a clean, responsive layout.

## Technologies Used

- React (Vite)
- JavaScript (JSX)
- CSS3

## Installation

```bash
cd week8/day2/daily-challenge
npm install
npm run dev
```

## How It Works

1. **State Management**: Using `useState` to hold an object containing all form fields.
2. **Event Handling**: `handleChange` dynamically updates state based on `event.target.name` and handles specific logic for checkboxes.
3. **Data Flow**: Inputs value is bound to state (Two-way data binding).

## Screenshot

(Add screenshot here after running)

## License

Educational Project - DI Bootcamp
