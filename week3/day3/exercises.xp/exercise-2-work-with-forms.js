// Step 1: Retrieve the form and log it
const form = document.getElementById('userForm');
console.log(form);

// Step 2: Retrieve inputs by ID and log them
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');
console.log(firstNameInput, lastNameInput);

// Step 3: Retrieve inputs by name attribute and log them
const firstNameByName = document.getElementsByName('firstname')[0];
const lastNameByName = document.getElementsByName('lastname')[0];
console.log(firstNameByName, lastNameByName);

// Step 4: Add submit event listener
form.addEventListener('submit', function(event) {
    event.preventDefault(); // prevent page reload

    const firstNameValue = firstNameInput.value.trim();
    const lastNameValue = lastNameInput.value.trim();

    if (firstNameValue && lastNameValue) {
        const usersAnswerList = document.querySelector('.usersAnswer');

        // Clear previous entries if needed
        usersAnswerList.innerHTML = '';

        // Create li for first name
        const liFirst = document.createElement('li');
        liFirst.textContent = firstNameValue;
        usersAnswerList.appendChild(liFirst);

        // Create li for last name
        const liLast = document.createElement('li');
        liLast.textContent = lastNameValue;
        usersAnswerList.appendChild(liLast);
    } else {
        alert('Please fill in both fields!');
    }
});
