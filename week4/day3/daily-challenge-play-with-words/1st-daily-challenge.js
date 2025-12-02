// 1st daily challenge


// Convert all words in an array to uppercase
function makeAllCaps(words) {
    return new Promise((resolve, reject) => {
        if (words.every(word => typeof word === "string")) {
            resolve(words.map(word => word.toUpperCase()));
        } else {
            reject("Error: Not all items in the array are strings!");
        }
    });
}

// Sort an array alphabetically if length > 4
function sortWords(words) {
    return new Promise((resolve, reject) => {
        if (words.length > 4) {
            resolve(words.sort());
        } else {
            reject("Error: Array has less than 5 words!");
        }
    });
}

// TEST CASES

makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result)) // ["APPLE","BANANA","KIWI","MELON","PEAR"]
    .catch(error => console.log(error));
