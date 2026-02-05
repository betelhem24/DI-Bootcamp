import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import ErrorBoundary from './components/ErrorBoundary';
import BuggyCounter from './components/BuggyCounter';
import LifecycleExercise from './components/LifecycleExercise';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center mb-5">Week 8 Day 2 - Exercises XP</h1>

      <div className="row">
        <div className="col-md-12 mb-4">
          <h2>Exercise 1: Error Boundary Simulation 1</h2>
          <p>Two BuggyCounters in separate ErrorBoundaries. One crash doesn't affect the other.</p>
          <div className="d-flex gap-3">
            <ErrorBoundary>
              <BuggyCounter />
            </ErrorBoundary>
            <ErrorBoundary>
              <BuggyCounter />
            </ErrorBoundary>
          </div>
        </div>

        <div className="col-md-12 mb-4">
          <h2>Exercise 2: Error Boundary Simulation 2</h2>
          <p>Two BuggyCounters in SAME ErrorBoundary. One crash brings down both.</p>
          <ErrorBoundary>
            <BuggyCounter />
            <BuggyCounter />
          </ErrorBoundary>
        </div>

        <div className="col-md-12 mb-4">
          <h2>Exercise 3: Error Boundary Simulation 3</h2>
          <p>BuggyCounter without ErrorBoundary (Will crash the whole app).</p>
          {/* Keeping this commented out or minimal to prevent app crash during demo */}
          <div className="alert alert-warning">
            This section intentionally crashes the app. Reload to reset.
          </div>
          <BuggyCounter />
        </div>

        <div className="col-md-12 mb-4">
          <h2>Exercise 4: Lifecycle Methods</h2>
          <LifecycleExercise />
        </div>
      </div>
    </div>
  )
}

export default App
