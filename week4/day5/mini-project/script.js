// Get DOM elements
const characterInfo = document.getElementById('character-info');
const getCharacterBtn = document.getElementById('get-character-btn');

// Cache for homeworlds to avoid redundant API calls
const homeworldCache = {};

/**
 * Fetch a random Star Wars character and display info
 * @param {number} retries - Number of retries if fetching fails
 */
async function fetchCharacter(retries = 1) {
    // Show loading message with spinner
    characterInfo.innerHTML = `<p class="loading"><i class="fas fa-spinner fa-spin"></i> Loading...</p>`;

    const randomId = Math.floor(Math.random() * 83) + 1; // Random character ID (1-83)

    try {
        // Fetch character data
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!response.ok) throw new Error('Character not found');

        const characterData = await response.json();
        if (!characterData.result) throw new Error('Invalid API response');

        const characterProperties = characterData.result.properties;

        // Destructure character properties
        const name = characterProperties.name || 'Unknown';
        const height = characterProperties.height || 'Unknown';
        const gender = characterProperties.gender || 'Unknown';
        const birthYear = characterProperties.birth_year || 'Unknown';
        const homeworldUrl = characterProperties.homeworld;

        // Fetch homeworld if not cached
        let homeworldName = 'Unknown';
        if (homeworldUrl) {
            if (homeworldCache[homeworldUrl]) {
                homeworldName = homeworldCache[homeworldUrl];
            } else {
                try {
                    const hwResponse = await fetch(homeworldUrl);
                    if (hwResponse.ok) {
                        const hwData = await hwResponse.json();
                        homeworldName = hwData.result.properties.name || 'Unknown';
                        homeworldCache[homeworldUrl] = homeworldName; // Cache it
                    }
                } catch {
                    homeworldName = 'Unknown';
                }
            }
        }

        // Update DOM with character info
        characterInfo.innerHTML = `
            <h2>${name}</h2>
            <p><strong>Height:</strong> ${height} cm</p>
            <p><strong>Gender:</strong> ${gender}</p>
            <p><strong>Birth Year:</strong> ${birthYear}</p>
            <p><strong>Homeworld:</strong> ${homeworldName}</p>
        `;

    } catch (error) {
        console.error(error);
        if (retries > 0) {
            // Retry after 500ms
            setTimeout(() => fetchCharacter(retries - 1), 500);
        } else {
            // Show error message
            characterInfo.innerHTML = `<p class="error"><i class="fas fa-triangle-exclamation"></i> Error fetching character. Please try again.</p>`;
        }
    }
}

// Add click event listener with try-catch
try {
    getCharacterBtn.addEventListener('click', () => fetchCharacter(1));
} catch (error) {
    console.error('Error adding event listener:', error);
}
