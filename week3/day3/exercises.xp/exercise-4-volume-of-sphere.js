// Step 1: Select the form and inputs
const form = document.getElementById('MyForm');
const radiusInput = document.getElementById('radius');
const volumeInput = document.getElementById('volume');

// Step 2: Add submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent form from submitting/reloading

    // Step 3: Get the radius value and check it's not empty
    const radius = parseFloat(radiusInput.value);
    if (!radius || radius <= 0) {
        alert("Please enter a valid positive number for radius.");
        return;
    }

    // Step 4: Calculate the volume of a sphere
    const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

    // Step 5: Display the volume in the input field
    volumeInput.value = volume.toFixed(2); // 2 decimal places
});
