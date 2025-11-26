// Step 2: Self-invoking function taking 1 argument (user name)
(function(userName) {

    // Step 3: Select container where user info will be added
    const userContainer = document.querySelector('.user-container');

    // Step 4: Create div for user info
    const userDiv = document.createElement('div');
    userDiv.classList.add('user-info');

    // Step 5: Create span for user name
    const nameSpan = document.createElement('span');
    nameSpan.textContent = userName;

    // Step 6: Create image for profile picture
    const profilePic = document.createElement('img');
    profilePic.src = 'https://via.placeholder.com/40';
    profilePic.alt = userName + ' profile picture';

    // Step 7: Add name and image to user div
    userDiv.appendChild(nameSpan);
    userDiv.appendChild(profilePic);

    // Step 8: Add user div to navbar
    userContainer.appendChild(userDiv);

})('John'); // Immediately call function with 'John'
