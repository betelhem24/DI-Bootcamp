// Select the form element
const form = document.getElementById("myForm");

// Listen for form submission
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent page refresh

    // Get input values
    const name = document.getElementById("name").value;
    const lastName = document.getElementById("lastName").value;

    // Create JS object and convert to JSON string
    const userData = { name, lastName };
    const jsonString = JSON.stringify(userData);

    // Display JSON on the page
    const output = document.createElement("pre");
    output.textContent = jsonString;
    document.body.appendChild(output);
});
