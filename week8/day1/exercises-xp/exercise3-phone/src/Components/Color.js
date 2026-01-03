import React, { useState, useEffect } from 'react';

const Color = () => {
  // Step 1: Create state variable favoriteColor with initial value "red"
  const [favoriteColor, setFavoriteColor] = useState('red');

  // Step 3: useEffect hook - called after component renders
  useEffect(() => {
    alert('useEffect reached');
  }, [favoriteColor]); // Dependency array - runs when favoriteColor changes

  // Step 4: Function to change favoriteColor to "blue"
  const changeColor = () => {
    setFavoriteColor('blue');
  };

  return (
    <div className="color-container">
      {/* Step 2: Output the value in a header tag */}
      <div className="color-display">
        <h1 
          className="color-header"
          style={{ color: favoriteColor }}
        >
          My favorite color is {favoriteColor}!
        </h1>
      </div>

      {/* Visual representation of the color */}
      <div className="color-box-container">
        <div 
          className="color-box"
          style={{ backgroundColor: favoriteColor }}
        >
          <span className="color-name">{favoriteColor.toUpperCase()}</span>
        </div>
      </div>

      {/* Step 4: Button to change color to blue */}
      <div className="button-container">
        <button 
          onClick={changeColor} 
          className="change-button"
          disabled={favoriteColor === 'blue'}
        >
          {favoriteColor === 'blue' ? 'Color Changed!' : 'Change to Blue'}
        </button>
      </div>

      {/* Information section */}
      <div className="info-section">
        <h3>How it works:</h3>
        <ol className="info-list">
          <li>Component renders with favorite color as <strong style={{color: 'red'}}>red</strong></li>
          <li>useEffect runs and shows alert "useEffect reached"</li>
          <li>Click button to change color to <strong style={{color: 'blue'}}>blue</strong></li>
          <li>Component re-renders with new color</li>
          <li>useEffect runs again and shows alert</li>
        </ol>
      </div>
    </div>
  );
};

export default Color;