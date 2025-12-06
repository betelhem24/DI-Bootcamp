const characterInfo = document.getElementById('character-info');
const getCharacterBtn = document.getElementById('get-character-btn');

// Cache for homeworlds to avoid redundant API calls
const homeworldCache = {};

// Fetch a random Star Wars character and display it
async function fetchCharacter(retries = 1) {
    // Show loading spinner
    characterInfo.innerHTML = `
        <p class="loading"><i class="fas fa-spinner fa-spin"></i> Loading...</p>
    `;

    const randomId = Math.floor(Math.random() * 83) + 1;

    try {
        const response = await fetch(`https://www.swapi.tech/api/people/${randomId}`);
        if (!response.ok) throw new Error('Character not found');

        const characterData = await response.json();
        if (!characterData.result) throw new Error('Invalid API response');

        const characterProperties = characterData.result.properties;

        const name = characterProperties.name || 'Unknown';
        const height = characterProperties.height || 'Unknown';
        const gender = characterProperties.gender || 'Unknown';
        const birthYear = characterProperties.birth_year || 'Unknown';
        const homeworldUrl = characterProperties.homeworld;

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
                        homeworldCache[homeworldUrl] = homeworldName;
                    }
                } catch {
                    homeworldName = 'Unknown';
                }
            }
        }

        // Display character info
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
            setTimeout(() => fetchCharacter(retries - 1), 500);
        } else {
            characterInfo.innerHTML = `
                <p class="error"><i class="fas fa-triangle-exclamation"></i> Error fetching character. Please try again.</p>
            `;
        }
    }
}

// Button click event
getCharacterBtn.addEventListener('click', () => fetchCharacter(1));
