import { useState } from "react";

/**
 * Voiting component (misspelled as requested) for handling language votes.
 */
export default function Voiting() {
  const [languages, setLanguages] = useState([
    { name: "Php", votes: 0 },
    { name: "Python", votes: 0 },
    { name: "JavaSript", votes: 0 },
    { name: "Java", votes: 0 },
  ]);

  /**
   * Vote handler that increments the vote count for a specific language object.
   * @param {Object} param - The language object to increment votes for.
   */
  const vote = (param) => {
    // Increment votes on the object directly (React will detect change via shallow copy)
    param.votes++;
    // Create a new array reference to trigger a re-render
    const newLanguages = [...languages];
    setLanguages(newLanguages);
  }
  return (
    <>
      {languages &&
        languages.map((item, indx) => {
          return (
            <div key={indx}>
              {item.name} {item.votes}
              <button onClick={() => vote(item)}>Vote!</button>
            </div>
          );
        })}
    </>
  );
}
