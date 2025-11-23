

// Daily challenge: Stars

// Using One Loop

let stars = ""; // stores the growing pattern

for (let i = 1; i <= 6; i++) {
    stars += "* "; // add a star for this row
    console.log(stars); // print the row
}


// Using Nested Loops

for (let i = 1; i <= 6; i++) {
    let row = ""; // store stars for current row
    for (let j = 1; j <= i; j++) {
        row += "* "; // add a star for this row
    }
    console.log(row); // print the row
}


// Daily challenge GOLD: Bubble Sort

const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8];

// Convert array to string
console.log("toString():", numbers.toString());

// Convert array to string with different separators
console.log("join('+'):", numbers.join("+"));
console.log("join(' '):", numbers.join(" "));
console.log("join(''):", numbers.join(""));

// Bubble Sort - descending order
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
        if (numbers[j] < numbers[j + 1]) {
            let temp = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = temp;
        }
    }
    console.log(`After pass ${i + 1}:`, numbers); // see array after each pass
}

// Final sorted array
console.log("Sorted array descending:", numbers);
