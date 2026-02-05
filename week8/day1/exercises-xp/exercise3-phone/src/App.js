/**
 * Exercise 3: Demonstrating State and Props with a Phone component.
 * This app renders a Phone component that manages its own state variables.
 */
import React from 'react';
import './App.css';
import Phone from './Components/Phone';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise 3: Phone Components</h1>
        <p className="subtitle">Managing Object State with React Hooks</p>
      </header>
      <div className="content">
        <Phone />
      </div>
    </div>
  );
}

export default App;