// Returns a Promise that resolves after 2 seconds
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved'); // Resolve the Promise with this value
        }, 2000);
    });
}

// Async function that waits for the Promise
async function asyncCall() {
    console.log('calling');           // Print immediately
    let result = await resolveAfter2Seconds(); // Wait 2 seconds
    console.log(result);              // Print resolved value
}

// Run the async function
asyncCall();
