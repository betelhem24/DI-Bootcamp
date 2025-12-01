// Select the form and output container
const form = document.getElementById('myForm');
const output = document.getElementById('output');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Get values from the form
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();

    // Create JSON object
    const data = {
        name: firstName,
        lastName: lastName
    };

    // Display JSON on the page
    output.textContent = JSON.stringify(data, null, 2);

    // Optional: clear form inputs
    form.reset();
});
