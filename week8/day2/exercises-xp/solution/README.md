# Week 8 Day 2 Exercises XP - React Lifecycle & Error Boundaries

## Project Overview

This project demonstrates React Lifecycle Methods and Error Boundaries using Class Components. It fulfills the requirements for Week 8 Day 2 Exercises XP, focusing on:
1.  **ErrorBoundary Component**: Catching JavaScript errors in child components.
2.  **BuggyCounter Component**: Simulating errors for testing error boundaries.
3.  **Lifecycle Methods**: Demonstrating `componentDidMount`, `componentDidUpdate`, `shouldComponentUpdate`, `getSnapshotBeforeUpdate`, and `componentWillUnmount`.

## Technologies Used

- React 18 (Class Components)
- TypeScript
- Vite
- Bootstrap 5

## Installation

```bash
cd week8/day2/exercises-xp/solution
npm install
npm run dev
```

## Exercises Implemented

### Exercise 1: Error Boundary Simulation 1
- Two `BuggyCounter` components, each wrapped in its OWN `ErrorBoundary`.
- **Result**: If one counter crashes, only that specific counter is replaced by the fallback UI. The other counter remains functional.

### Exercise 2: Error Boundary Simulation 2
- Two `BuggyCounter` components wrapped in a SINGLE `ErrorBoundary`.
- **Result**: If one counter crashes, the entire ErrorBoundary catches it, and both counters are replaced by the fallback UI.

### Exercise 3: BuggyCounter without Error Boundary
- A `BuggyCounter` placed outside of any `ErrorBoundary`.
- **Result**: Crashing this counter will crash the entire React application (Unmounting the whole component tree).

### Exercise 4: Lifecycle Methods
- Implements a `LifecycleExercise` class component.
- **Features**:
    - `componentDidMount`: Changes color to yellow after 2 seconds.
    - `shouldComponentUpdate`: Returns true to allow updates.
    - `componentDidUpdate`: Logs color changes to the console.
    - `getSnapshotBeforeUpdate`: Captures the DOM state before update.
    - `componentWillUnmount`: Alerts when the child Header component is removed.
    - Button to change color to Blue.
    - Button to remove the Header component (triggering unmount).

## Key Concepts

- **Class Components**: Using `class extends Component`.
- **State Management**: `this.state` and `this.setState`.
- **Error Handling**: `static getDerivedStateFromError` and `componentDidCatch`.
- **Lifecycle**: Understanding the mounting, updating, and unmounting phases.

## License

Educational Project - DI Bootcamp
