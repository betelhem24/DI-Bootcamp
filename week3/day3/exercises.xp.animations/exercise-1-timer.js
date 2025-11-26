// Part I: alert "Hello World" after 2 seconds
setTimeout(() => {
    alert("Hello World");
}, 2000);

// Part II: add a paragraph <p>Hello World</p> after 2 seconds
setTimeout(() => {
    const container = document.getElementById("container");
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);
}, 2000);

// Part III: add a paragraph every 2 seconds, stop after 5 paragraphs or button click
const container = document.getElementById("container");
const clearBtn = document.getElementById("clear");

let intervalId = setInterval(() => {
    const p = document.createElement("p");
    p.textContent = "Hello World";
    container.appendChild(p);

    // Stop after 5 paragraphs
    if (container.children.length >= 5) {
        clearInterval(intervalId);
    }
}, 2000);

// Stop interval if button is clicked
clearBtn.addEventListener("click", () => {
    clearInterval(intervalId);
});
