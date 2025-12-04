// Replace with your real Giphy API key
const apiKey = "YOUR_REAL_API_KEY"; // If submitting, teacher may accept placeholder

// Giphy search URL: 10 GIFs about "sun", starting at offset 2
const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=sun&limit=10&offset=2`;

// Fetch the GIFs using Fetch API
fetch(url)
    .then(response => {
        // Check if response status is OK
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        return response.json();
    })
    .then(data => {
        // Log the Javascript object as required
        console.log(data);
    })
    .catch(error => console.error("An error occurred:", error));
