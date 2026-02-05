import React, { useState } from 'react';

/**
 * Phone component demonstrating the use of several state variables.
 */
const Phone = () => {
  // Part I: Create state variables using useState hook
  // State variables for phone characteristics. 
  // Most are static in this example, but 'color' can be changed.
  const [brand] = useState("Samsung");
  const [model] = useState("Galaxy S20");
  const [color, setColor] = useState("black");
  const [year] = useState(2020);

  // Part II: Function to change color to blue
  /**
   * Function to update the phone's color state to 'blue'.
   */
  const changeColor = () => {
    setColor("blue");
  };

  return (
    <div className="phone-container">
      {/* Part I: Display the state variables */}
      <div className="phone-info">
        <h2>My Phone Details</h2>
        <div className="detail-row">
          <span className="label">Brand:</span>
          <span className="value">{brand}</span>
        </div>
        <div className="detail-row">
          <span className="label">Model:</span>
          <span className="value">{model}</span>
        </div>
        <div className="detail-row">
          <span className="label">Color:</span>
          <span className="value" style={{ color: color === 'blue' ? '#3498db' : '#2c3e50' }}>
            {color}
          </span>
        </div>
        <div className="detail-row">
          <span className="label">Year:</span>
          <span className="value">{year}</span>
        </div>
      </div>

      {/* Part II: Button to change color */}
      <div className="button-section">
        <button onClick={changeColor} className="change-color-button">
          Change Color to Blue
        </button>
      </div>

      {/* Visual representation of the phone */}
      <div className="phone-visual">
        <div
          className="phone-device"
          style={{ backgroundColor: color }}
        >
          <div className="phone-screen">
            <p>{brand}</p>
            <p>{model}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Phone;