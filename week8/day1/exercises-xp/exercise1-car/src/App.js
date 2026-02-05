/**
 * Exercise 1: Demonstrating Component Composition and Props.
 * This app renders a Car component, which in turn renders a Garage component.
 */
import React from 'react';
import './App.css';
import Car from './Components/Car';

/**
 * Static car information to be passed down as props.
 */
const carinfo = { name: "Ford", model: "Mustang" };

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise 1: Car and Components</h1>
      </header>
      <div className="content">
        <Car carInfo={carinfo} />
      </div>
    </div>
  );
}

export default App;