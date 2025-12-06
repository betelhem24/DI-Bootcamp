// Star Wars Web App Using AJAX API

const characterInfo = document.getElementById('character-info');
const getCharacterBtn = document.getElementById('get-character-btn');

// Fetch a random Star Wars character and display info
async function fetchCharacter() {

    // Show loading message
    characterInfo.innerHTML = '<p class="loading">Loading...</p>'; 
      // Random character ID
      
    const randomId = Math.floor(Math.random() * 83) + 1; 

    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!response.ok) throw new Error('Network error');

        const data = await response.json();
        const character = data.result;

        const name = character.properties.name || 'Unknown';
        const height = character.properties.height || 'Unknown';
        const gender = character.properties.gender || 'Unknown';
        const birthYear = character.properties.birth_year || 'Unknown';
        const homeworldUrl = character.properties.homeworld || null;

        let homeworldName = 'Unknown';
        if (homeworldUrl) {
            const homeResponse = await fetch(homeworldUrl);
            if (homeResponse.ok) {
                const homeData = await homeResponse.json();
                homeworldName = homeData.result.properties.name || 'Unknown';
            }
        }

        // Display character info in the box
        characterInfo.innerHTML = `
            <h2>${name}</h2>
            <p>Height: ${height} cm</p>
            <p>Gender: ${gender}</p>
            <p>Birth Year: ${birthYear}</p>
            <p>Homeworld: <a href="${homeworldUrl}" target="_blank">${homeworldName}</a></p>
        `;

    } catch (error) {
        characterInfo.innerHTML = `<p class="error">Error loading character. Please try again.</p>`;
        console.error(error);
    }
}

// Run fetchCharacter when button is clicked
getCharacterBtn.addEventListener('click', fetchCharacter);
