// API URL for searching "hilarious" GIFs
const url = "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

// Make the GET request using fetch()
fetch(url)
  .then(response => {
    // Check if the request failed
    if (!response.ok) {
      throw new Error("Network response was not OK");
    }
    return response.json(); // Convert response to JSON
  })
  .then(data => {
    console.log(data); // Log the JavaScript object
  })
  .catch(error => {
    console.log("Error:", error); // Handle errors
  });
