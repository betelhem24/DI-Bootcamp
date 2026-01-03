import React from 'react';

const Garage = (props) => {
  return (
    <div className="garage-container">
      <h4>Who lives in my {props.size} Garage?</h4>
    </div>
  );
};

export default Garage;