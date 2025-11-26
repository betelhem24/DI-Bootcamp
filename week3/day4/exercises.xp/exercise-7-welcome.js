// Exercise 7: Welcome

// Self-invoking function that takes 1 argument: user's name
(function(userName) {
    // Select the navbar div
    const navbar = document.getElementById("navbar");

    // Create a div to show the user's name and profile picture
    const userDiv = document.createElement("div");
    userDiv.style.marginLeft = "20px"; // spacing from "Navbar:"

    // Create a span for the name
    const nameSpan = document.createElement("span");
    nameSpan.textContent = userName;

    // Create an image element for the profile picture
    const profileImg = document.createElement("img");
    profileImg.src = "https://via.placeholder.com/40"; // placeholder image
    profileImg.alt = "Profile Picture";

    // Append name and image to the user div
    userDiv.appendChild(nameSpan);
    userDiv.appendChild(profileImg);

    // Append the user div to the navbar
    navbar.appendChild(userDiv);

})("John"); // Example username

// Explanation:
// - This is a self-invoking function (IIFE) that runs immediately
// - It takes the user's name as an argument
// - Creates a div containing the user's name and profile picture
// - Appends the div to the navbar
