import React, { useState } from 'react';
import Garage from './Garage';

/**
 * Car component displaying specific car information and state.
 * It uses the useState hook to manage the car's color.
 */
const Car = (props) => {
  // Part II: useState Hook - adding color to state
  // State hook to manage the color of the car. Default is 'red'.
  const [color, setColor] = useState('red');

  return (
    <div className="car-container">
      {/* Part I: Render header with carInfo model */}
      <h2>This car is {props.carInfo.model}</h2>

      {/* Part II: Return the color property */}
      <h3>This car is {color} {props.carInfo.model}</h3>

      {/* Part III: Use Garage component and pass size */}
      <Garage size="small" />
    </div>
  );
};

export default Car;