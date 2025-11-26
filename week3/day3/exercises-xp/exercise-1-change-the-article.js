// Step 1: Retrieve the h1 and log it
const h1 = document.querySelector("article h1");
console.log(h1);

// Step 2: Remove the last paragraph in the article
const article = document.querySelector("article");
const lastParagraph = article.querySelector("p:last-of-type");
lastParagraph.remove();

// Step 3: Add event listener to change h2 background color to red on click
const h2 = document.querySelector("article h2");
h2.addEventListener("click", () => {
    h2.style.backgroundColor = "red";
});

// Step 4: Add event listener to hide h3 on click
const h3 = document.querySelector("article h3");
h3.addEventListener("click", () => {
    h3.style.display = "none";
});

// Step 5: Button to make all paragraphs bold
const boldButton = document.getElementById("boldButton");
boldButton.addEventListener("click", () => {
    const paragraphs = document.querySelectorAll("article p");
    paragraphs.forEach(p => {
        p.style.fontWeight = "bold";
    });
});

// BONUS 1: Hover on h1 to change font size randomly
h1.addEventListener("mouseover", () => {
    const randomSize = Math.floor(Math.random() * 101); // 0 to 100px
    h1.style.fontSize = randomSize + "px";
});

// BONUS 2: Hover on 2nd paragraph to fade out
const secondP = article.querySelectorAll("p")[1];
secondP.classList.add("fade");
secondP.addEventListener("mouseover", () => {
    secondP.classList.add("fade-out");
});
secondP.addEventListener("mouseout", () => {
    secondP.classList.remove("fade-out");
});
