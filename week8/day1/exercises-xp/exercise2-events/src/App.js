/**
 * Exercise 2: Demonstrating Event Handling in React.
 * This app includes a set of interactive components that handle click, keydown, and state toggle events.
 */
import React from 'react';
import './App.css';
/**
 * Events component containing different types of event handlers and state management examples.
 */
import Events from './Components/Events';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise 2: Events</h1>
      </header>
      <div className="content">
        <Events />
      </div>
    </div>
  );
}

export default App;