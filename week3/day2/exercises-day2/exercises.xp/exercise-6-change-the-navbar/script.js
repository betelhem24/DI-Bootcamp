// Step 2: Change the id of the div from 'navBar' to 'socialNetworkNavigation'
let navDiv = document.getElementById("navBar");
navDiv.setAttribute("id", "socialNetworkNavigation");

// Step 3: Add a new <li> with text "Logout" to the <ul>
let newListItem = document.createElement("li");
let logoutText = document.createTextNode("Logout");
newListItem.appendChild(logoutText);

let ulElement = navDiv.querySelector("ul");
ulElement.appendChild(newListItem);

// Step 4: Display the text of the first and last <li> elements
let firstLi = ulElement.firstElementChild;
let lastLi = ulElement.lastElementChild;

console.log("First link text:", firstLi.textContent); // Output: Profile
console.log("Last link text:", lastLi.textContent);   // Output: Logout
