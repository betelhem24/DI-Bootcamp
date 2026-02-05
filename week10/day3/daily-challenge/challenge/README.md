# Week 10 Day 3 Daily Challenge - Productivity Tracker

## Project Overview

A Productivity Tracker application built with React and Redux Toolkit, focusing on performance optimizations using `createSelector` and `useCallback`.

## Features

- **Categorized Tasks**: Tasks are organized by categories (e.g., Work, Personal).
- **CRUD Operations**: Add, Edit, Delete tasks and categories.
- **Progress Tracking**: Track completion status of tasks.
- **Performance Optimization**:
  - **`createSelector`**: Memoized selectors for filtering tasks by category and counting completed tasks.
  - **`useCallback`**: Memoized event handlers for task editing and completion to prevent unnecessary re-renders.

## Technologies Used

- React (Vite)
- Redux Toolkit
- React-Redux
- TypeScript
- CSS3

## Installation

```bash
cd week10/day3/daily-challenge/challenge
npm install
npm run dev
```

## Implementation Highlights

- **`features/tasks/tasksSlice.ts`**: Contains `selectTasksByCategory` and `selectCompletedTasksCount` which are memoized selectors created with `createSelector`.
- **`components/TaskList.tsx`**: Uses `useCallback` for all interaction handlers (`handleAddTask`, `handleDeleteTask`, `handleToggleTask`, `saveEdit`, etc.)

## License

Educational Project - DI Bootcamp