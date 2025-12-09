// Function to print user details
function printUserDetails(user) {
    console.log("ID: ".concat(user.id));
    console.log("Name: ".concat(user.name));
    console.log("Email: ".concat(user.email));
    if (user.membershipLevel) {
        console.log("Membership Level: ".concat(user.membershipLevel));
    }
}
// Example usage
var user1 = { id: 1, name: "Alice", email: "alice@example.com", membershipLevel: "Gold" };
var user2 = { id: 2, name: "Bob", email: "bob@example.com" };
printUserDetails(user1);
printUserDetails(user2);
