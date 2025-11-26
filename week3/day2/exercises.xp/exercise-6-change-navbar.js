// Exercise 6 – Change Navbar

const nav = document.getElementById("navBar");
nav.setAttribute("id", "socialNetworkNavigation");

const ul = nav.querySelector("ul");
const li = document.createElement("li");
li.textContent = "Logout";
ul.appendChild(li);

console.log("First li:", ul.firstElementChild.textContent);
console.log("Last li:", ul.lastElementChild.textContent);
