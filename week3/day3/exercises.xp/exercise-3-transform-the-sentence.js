// Step 1: Declare a global variable
let allBoldItems;

// Step 2: Function to get all bold items in the paragraph
function getBoldItems() {
    const paragraph = document.getElementById('sentence');
    allBoldItems = paragraph.getElementsByTagName('strong');
}
getBoldItems(); // initialize the bold items

// Step 3: Function to highlight all bold items in blue
function highlight() {
    for (let item of allBoldItems) {
        item.style.color = 'blue';
    }
}

// Step 4: Function to return all bold items to default color black
function returnItemsToDefault() {
    for (let item of allBoldItems) {
        item.style.color = 'black';
    }
}

// Step 5: Add mouseover and mouseout events
const paragraph = document.getElementById('sentence');
paragraph.addEventListener('mouseover', highlight);
paragraph.addEventListener('mouseout', returnItemsToDefault);
