// Self-invoking function to add user info to the navbar
(function(userName) {
    // Create a div to hold the user's name
    const nameDiv = document.createElement('div');
    nameDiv.textContent = `Welcome, ${userName}!`;

    // Create an img element for the profile picture
    const profilePic = document.createElement('img');
    profilePic.src = 'https://via.placeholder.com/40'; // placeholder image
    profilePic.alt = `${userName}'s profile picture`;

    // Get the navbar's user-info container
    const userInfoContainer = document.getElementById('user-info');

    // Append the name and profile picture to the container
    userInfoContainer.appendChild(nameDiv);
    userInfoContainer.appendChild(profilePic);

// Argument: the name of the signed-in user
})("John");

// Explanation:
// - This self-invoking function runs immediately
// - It dynamically creates a div and an image element
// - The div contains the user's name, and the img is the profile picture
// - Both elements are added to the navbar's #user-info container
