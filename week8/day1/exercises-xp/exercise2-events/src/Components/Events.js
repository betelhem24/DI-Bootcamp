import React, { useState } from 'react';

const Events = () => {
  // Part III: useState hook for toggle
  const [isToggleOn, setIsToggleOn] = useState(true);

  // Part I: Arrow function that alerts
  const clickMe = () => {
    alert('I was clicked');
  };

  // Part II: Function to handle keydown
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      const inputValue = event.target.value;
      alert(`You entered: ${inputValue}`);
      event.target.value = ''; // Clear input after alert
    }
  };

  // Part III: Function to toggle state
  const toggleSwitch = () => {
    setIsToggleOn(!isToggleOn);
  };

  return (
    <div className="events-container">
      {/* Part I: Click Me Button */}
      <div className="event-section">
        <h2>Part I: Click Event</h2>
        <button onClick={clickMe} className="click-button">
          Click Me
        </button>
      </div>

      {/* Part II: KeyDown Input */}
      <div className="event-section">
        <h2>Part II: KeyDown Event</h2>
        <p>Type something and press Enter:</p>
        <input
          type="text"
          onKeyDown={handleKeyDown}
          placeholder="Press Enter after typing"
          className="input-field"
        />
      </div>

      {/* Part III: Toggle Button */}
      <div className="event-section">
        <h2>Part III: Toggle Button</h2>
        <button onClick={toggleSwitch} className="toggle-button">
          {isToggleOn ? 'ON' : 'OFF'}
        </button>
        <p className="toggle-status">
          The button is currently: <strong>{isToggleOn ? 'ON' : 'OFF'}</strong>
        </p>
      </div>
    </div>
  );
};

export default Events;