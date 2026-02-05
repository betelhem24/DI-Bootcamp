import React from 'react';

/**
 * Garage component that receives a size prop and displays it.
 */
const Garage = (props) => {
  return (
    <div className="garage-container">
      <h4>Who lives in my {props.size} Garage?</h4>
    </div>
  );
};

export default Garage;