// Async function to get a starship from the API
async function getStarship() {
    try {
        // Wait for the fetch request
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        
        // Check if the response was successful
        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.status);
        }

        // Parse the response as JSON
        const data = await response.json();

        // Log the starship data
        console.log(data.result);

    } catch (error) {
        // Log any errors
        console.log("An error occurred:", error.message);
    }
}

// Run the function
getStarship();
