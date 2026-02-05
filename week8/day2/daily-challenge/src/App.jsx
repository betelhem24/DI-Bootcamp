/**
 * Main Application Component for Week 8 Day 2 Daily Challenge.
 * This app demonstrates passing functions via props and simple form/voting logic.
 */
import { useState } from "react";
import "./App.css";
import Voiting from "./conponents/Voiting";

/**
 * Simple Counter component for demonstration.
 */
const Counter = ({ count, setCount }) => (
  <div>
    <p>Count: {count}</p>
    <button onClick={() => setCount(count + 1)}>Increment</button>
  </div>
);
function App() {
  const [count, setCount] = useState(10)
  return (
    <div className="App">
      <h2>
        Passing Function via Props / Handling Render Errors / Forms in React
      </h2>
      <Counter count={count} setCount={setCount} />
      <h2>Voting App</h2>
      <Voiting />
    </div>
  );
}

export default App;