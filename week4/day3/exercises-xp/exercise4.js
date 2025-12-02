// Exercise 4: quizz - not mandatory

function compareToTen(num) {
  // Return a Promise that resolves if num <= 10, rejects if num > 10
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("The number " + num + " is less than or equal to 10");
    } else {
      reject("The number " + num + " is greater than 10");
    }
  });
}

// Test cases
compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error));

compareToTen(8)
  .then(result => console.log(result))
  .catch(error => console.log(error));
