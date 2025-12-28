import React, { useState } from 'react';
import './App.css';

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Function to increase votes for a specific language
  const handleVote = (index) => {
    const newLanguages = [...languages];
    newLanguages[index].votes += 1;
    setLanguages(newLanguages);
  };

  return (
    <div className="App">
      <div className="voting-container">
        <h1>Vote Your Language!</h1>
        <div className="languages-grid">
          {languages.map((language, index) => (
            <div key={index} className="language-card">
              <div className="language-info">
                <h2>{language.votes}</h2>
                <p>{language.name}</p>
              </div>
              <button 
                className="vote-button"
                onClick={() => handleVote(index)}
              >
                Click Here
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;