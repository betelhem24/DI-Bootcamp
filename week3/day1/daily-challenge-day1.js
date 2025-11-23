// Daily challenge: Not Bad

// 1. Create sentence
let sentence = "The movie is not that bad, I like it"; 

// 2. Find position of "not"
let wordNot = sentence.indexOf("not"); 

// 3. Find position of "bad"
let wordBad = sentence.indexOf("bad"); 

// 4. Replace "not...bad" with "good" if "bad" comes after "not"
if (wordNot !== -1 && wordBad !== -1 && wordBad > wordNot) {
  let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
  console.log(newSentence);
} else {
  console.log(sentence);
}


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
