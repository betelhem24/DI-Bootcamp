// Step 2: Retrieve the div and console.log it
let containerDiv = document.getElementById('container');
console.log(containerDiv);

// Step 3: Change "Pete" to "Richard"
let allListItems = document.querySelectorAll('li');
allListItems.forEach(item => {
    if(item.textContent === "Pete") item.textContent = "Richard";
});

// Step 4: Delete the second <li> of the second <ul>
let secondUl = document.querySelectorAll('ul')[1];
secondUl.removeChild(secondUl.children[1]);

// Step 5: Change the first <li> of each <ul> to your name
let allUls = document.querySelectorAll('ul');
allUls.forEach(ul => ul.children[0].textContent = "Alex"); // Replace Alex with your name

// Step 6: Add class student_list to both <ul>'s
allUls.forEach(ul => ul.classList.add('student_list'));

// Step 7: Add classes university and attendance to the first <ul>
allUls[0].classList.add('university', 'attendance');

// Step 8: Add light blue background and padding to the <div>
containerDiv.style.backgroundColor = 'lightblue';
containerDiv.style.padding = '10px';

// Step 9: Hide the <li> that contains "Dan"
allListItems.forEach(item => {
    if(item.textContent === "Dan") item.style.display = 'none';
});

// Step 10: Add border to the <li> that contains "Richard"
allListItems.forEach(item => {
    if(item.textContent === "Richard") item.style.border = '2px solid black';
});

// Step 11: Change font size of the whole body
document.body.style.fontSize = '18px';

// Bonus: Alert "Hello x and y" if background is light blue
if(containerDiv.style.backgroundColor === 'lightblue') {
    let users = [];
    allListItems.forEach(item => {
        if(item.style.display !== 'none') users.push(item.textContent);
    });
    alert(`Hello ${users.join(' and ')}`);
}
