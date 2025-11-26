// Self-invoking function that displays a fortune
(function(numberOfChildren, partnersName, geoLocation, jobTitle) {
    // Create the sentence
    const sentence = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnersName} with ${numberOfChildren} kids.`;

    // Display it in the DOM
    document.getElementById('fortune').textContent = sentence;

// Arguments: number of children, partner's name, location, job title
})(3, "Alex", "Paris", "Software Developer");

// Explanation:
// - This is a self-invoking (immediately invoked) function
// - It takes 4 arguments and creates a string using template literals
// - The sentence is displayed inside the <div id="fortune">
// - No need to call the function again; it runs automatically
