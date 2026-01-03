import React, { useState, useEffect } from 'react';

const Color = () => {
  const [favoriteColor, setFavoriteColor] = useState('red');

  useEffect(() => {
    alert('useEffect reached');
  }, [favoriteColor]);

  const changeColor = () => {
    setFavoriteColor('blue');
  };

  return (
    <div style={{ padding: '50px', textAlign: 'center', backgroundColor: '#f0f0f0', borderRadius: '10px' }}>
      <h1 style={{ color: favoriteColor, fontSize: '3em' }}>
        My favorite color is {favoriteColor}!
      </h1>

      <div style={{ margin: '40px 0' }}>
        <div 
          style={{
            width: '200px',
            height: '200px',
            backgroundColor: favoriteColor,
            margin: '0 auto',
            border: '3px solid black',
            borderRadius: '10px'
          }}
        />
      </div>

      <button 
        onClick={changeColor} 
        style={{
          padding: '15px 40px',
          fontSize: '18px',
          backgroundColor: '#667eea',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        Change to Blue
      </button>
    </div>
  );
};

export default Color;