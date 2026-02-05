/**
 * Main Application Component for the Programming Language Voting App.
 * This component manages the state of various programming languages and their respective vote counts.
 */
import React, { useState } from 'react';
import './App.css';

function App() {
  /**
   * State hook to manage the list of programming languages and their vote totals.
   * Each object in the array represents a language with a name and a votes property.
   */
  // Step 1: Create state with languages array
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaScript", votes: 0 },
    { name: "Java", votes: 0 }
  ]);

  /**
   * Handler function to increment the vote count for a specific language.
   * @param {number} index - The index of the language in the state array.
   */
  const handleVote = (index) => {
    // Create a shallow copy of the languages array to maintain immutability
    const newLanguages = [...languages];
    // Increment the votes for the selected language
    newLanguages[index].votes += 1;
    // Update the state with the modified array
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