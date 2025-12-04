const form = document.getElementById('gifForm');
const input = document.getElementById('gifInput');
const container = document.getElementById('gifContainer');
const deleteAllBtn = document.getElementById('deleteAllBtn');

const API_KEY = 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My';

async function fetchGif(category) {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}`);
        const data = await response.json();
        const gifUrl = data.data.images.fixed_height.url;

        const gifDiv = document.createElement('div');
        const img = document.createElement('img');
        img.src = gifUrl;
        img.alt = category;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'DELETE';
        deleteBtn.addEventListener('click', () => container.removeChild(gifDiv));

        gifDiv.appendChild(img);
        gifDiv.appendChild(deleteBtn);
        container.appendChild(gifDiv);
    } catch (error) {
        console.error('Error fetching GIF:', error);
        alert('Failed to fetch GIF. Try again!');
    }
}

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const category = input.value.trim();
    if (category) {
        fetchGif(category);
        input.value = '';
    }
});

deleteAllBtn.addEventListener('click', () => {
    container.innerHTML = '';
});
