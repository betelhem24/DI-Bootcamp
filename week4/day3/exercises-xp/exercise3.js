// Exercise 3 : Resolve & Reject

// Promise that resolves with 3
const resolvedPromise = Promise.resolve(3);

// Promise that rejects with "Boo!"
const rejectedPromise = Promise.reject("Boo!");

// Handle resolved promise
resolvedPromise.then((value) => {
  console.log("Resolved value:", value); // Output: 3
});

// Handle rejected promise
rejectedPromise.catch((error) => {
  console.log("Rejected reason:", error); // Output: Boo!
});
