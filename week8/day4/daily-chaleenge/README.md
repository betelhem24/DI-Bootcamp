# Week 8 Day 4 Daily Challenge - Enhanced Task Manager

## Project Overview

An advanced Task Manager application built with React using hooks (`useContext`, `useReducer`, `useRef`) as required by the Daily Challenge.

## Features

- **Add Tasks**: Create new tasks.
- **Edit Tasks**: Edit task text inline using `useRef` to manage focus and temporary state.
- **Filter Tasks**: Toggle between All, Active, and Completed views.
- **State Management**: Uses `useReducer` for complex state logic (Add, Edit, Delete, Toggle, Filter).
- **Context API**: Prop-drilling avoided by sharing state globally via `TaskContext`.

## Technologies Used

- React (Vite)
- JavaScript (JSX)
- CSS3

## Hooks Used

- **useReducer**: Manages the tasks array and filter state.
- **useContext**: Shares dispatch and state throughout the component tree.
- **useRef**: Manages the input focus when editing a task and reading input values.

## Installation

```bash
cd week8/day4/daily-chaleenge
npm install
npm run dev
```

## License

Educational Project - DI Bootcamp
