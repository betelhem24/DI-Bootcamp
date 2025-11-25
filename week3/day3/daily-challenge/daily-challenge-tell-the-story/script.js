// STEP 1: Get form and inputs
const form = document.getElementById("libform");
const noun = document.getElementById("noun");
const adjective = document.getElementById("adjective");
const person = document.getElementById("person");
const verb = document.getElementById("verb");
const place = document.getElementById("place");
const story = document.getElementById("story");
const shuffleBtn = document.getElementById("shuffleBtn");

// will store 3 story options
let storyOptions = [];

// STEP 2: When form is submitted
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // STEP 3: Get values
    const n = noun.value.trim();
    const adj = adjective.value.trim();
    const p = person.value.trim();
    const v = verb.value.trim();
    const pl = place.value.trim();

    // STEP 4: Check if empty
    if (!n || !adj || !p || !v || !pl) {
        alert("Please fill in all fields");
        return;
    }

    // STEP 5: Create three different stories
    storyOptions = [
        `${p} grabbed a ${adj} ${n} and decided to ${v} in ${pl}.`,
        `While in ${pl}, ${p} found a ${adj} ${n} and tried to ${v}.`,
        `${p} couldn't stop ${v}ing when they saw the ${adj} ${n} at ${pl}.`
    ];

    // Display the first story by default
    story.textContent = storyOptions[0];
});

// STEP 6 (BONUS): Shuffle button
shuffleBtn.addEventListener("click", function() {
    if (storyOptions.length === 0) {
        alert("Make a story first!");
        return;
    }

    const randomIndex = Math.floor(Math.random() * storyOptions.length);
    story.textContent = storyOptions[randomIndex];
});
