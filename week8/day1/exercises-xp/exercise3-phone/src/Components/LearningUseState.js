import React, { useState } from 'react';
// ↑ This imports React and the useState function

function LearningUseState() {
  // Step 2: Declare state
  const [count, setCount] = useState(0);
  // ↑          ↑           ↑            ↑
  // getter   setter      Hook     initial value (0)
  
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Count: {count}</h1>
      {/* Display the current value */}
      
      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>
      {/* When clicked, add 1 to count */}
    </div>
  );
}

export default LearningUseState;