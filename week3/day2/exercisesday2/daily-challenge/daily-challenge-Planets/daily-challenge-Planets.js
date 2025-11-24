// Daily challenge: Planets

// Step 1: Create an array of planets with their moons and colors
const planets = [
    { name: "Mercury", moons: 0, color: "gray" },
    { name: "Venus", moons: 0, color: "yellow" },
    { name: "Earth", moons: 1, color: "blue" },
    { name: "Mars", moons: 2, color: "red" },
    { name: "Jupiter", moons: 79, color: "orange" },
    { name: "Saturn", moons: 82, color: "goldenrod" },
    { name: "Uranus", moons: 27, color: "lightblue" },
    { name: "Neptune", moons: 14, color: "darkblue" }
];

// Step 2: Select the section element from HTML
const section = document.querySelector(".listPlanets");

// Step 3: Loop through planets and create a div for each
planets.forEach(planet => {
    const planetDiv = document.createElement("div"); // Create planet div
    planetDiv.classList.add("planet");               // Add class "planet"
    planetDiv.style.backgroundColor = planet.color; // Set background color
    planetDiv.textContent = planet.name;            // Add planet name
    section.appendChild(planetDiv);                 // Append to section

    // Step 4 (Bonus): Create moons for each planet
    for (let i = 0; i < planet.moons; i++) {
        const moonDiv = document.createElement("div"); // Create moon div
        moonDiv.classList.add("moon");                 // Add class "moon"
        moonDiv.style.top = Math.random() * 80 + "px"; // Random position
        moonDiv.style.left = Math.random() * 80 + "px";
        planetDiv.appendChild(moonDiv);               // Append moon to planet
    }
});
