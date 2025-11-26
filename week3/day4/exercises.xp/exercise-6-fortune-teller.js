// Exercise 6: Fortune Teller



// Self-invoking function that takes 4 arguments
(function(numChildren, partnerName, geoLocation, jobTitle) {
    // Create the fortune message
    const message = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numChildren} kids.`;

    // Display the message in the DOM
    const fortuneDiv = document.getElementById("fortune");
    fortuneDiv.textContent = message;

})(3, "Alice", "Paris", "Software Developer"); // Example arguments

// Explanation:
// - This is a self-invoking function (IIFE) which runs immediately
// - It takes 4 arguments: number of children, partner name, location, and job
// - It creates a sentence using template literals
// - The sentence is displayed in the <div> with id "fortune"
//