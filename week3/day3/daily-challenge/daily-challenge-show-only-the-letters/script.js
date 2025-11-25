// Step 3: Select the input element
const input = document.getElementById('letterInput');

// Step 4: Add event listener to allow only letters
input.addEventListener('input', function() {
  // Step 5: Remove any character that is not a letter
  input.value = input.value.replace(/[^a-zA-Z]/g, '');
});
