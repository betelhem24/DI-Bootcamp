import React from 'react';
import './App.css';
import Car from './Components/Car';

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