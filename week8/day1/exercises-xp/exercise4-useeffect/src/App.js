import React from 'react';
import './App.css';
import Color from './Components/Color';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Exercise 4: useEffect Hook</h1>
        <p className="subtitle">Understanding Component Lifecycle</p>
      </header>
      <div className="content">
        <Color />
      </div>
    </div>
  );
}

export default App;