// Exercise 5 – Users

const container = document.getElementById("container");
console.log(container);

const lists = document.querySelectorAll("ul.list");
lists.forEach(ul => ul.classList.add("student_list"));
lists[0].classList.add("university", "attendance");

// Change names
lists.forEach(ul => {
    ul.children[0].textContent = "Betelhem"; // change first li
});
lists[0].children[1].textContent = "Richard"; // change Pete

// Delete 2nd li of second ul
lists[1].children[1].remove();

// Style changes
container.style.backgroundColor = "lightblue";
container.style.padding = "10px";
lists[1].children[1]?.style.display = "none"; // Dan
lists[0].children[1].style.border = "1px solid black"; // Richard
document.body.style.fontSize = "18px";

// Bonus alert
if (container.style.backgroundColor === "lightblue") {
    alert("Hello Betelhem and David");
}
