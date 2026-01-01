import React, { useState } from 'react';
import './App.css';

// Separate Language Card Component for better reusability
const LanguageCard = ({ language, onVote }) => {
  return (
    <div className="language-card">
      <div className="language-info">
        <h2>{language.votes}</h2>
        <p>{language.name}</p>
      </div>
      <button 
        className="vote-button"
        onClick={onVote}
      >
        Click Here
      </button>
    </div>
  );
};

function App() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  // Function to increase votes for a specific language
  const handleVote = (index) => {
    // Input validation - ensure index is valid
    if (index < 0 || index >= languages.length) {
      console.error('Invalid language index');
      return;
    }

    // Create a new copy of the languages array
    const newLanguages = [...languages];
    // Increment the votes for the selected language
    newLanguages[index].votes += 1;
    // Update state
    setLanguages(newLanguages);
  };

  return (
    <div className="App">
      <div className="voting-container">
        <h1>Vote Your Language!</h1>
        <div className="languages-grid">
          {languages.map((language, index) => (
            <LanguageCard
              key={index}
              language={language}
              onVote={() => handleVote(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;