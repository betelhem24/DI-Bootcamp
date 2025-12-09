// Base User interface
interface User {
    readonly id: number; // Readonly property
    name: string;
    email: string;
}

// Extend User to create PremiumUser with an optional property
interface PremiumUser extends User {
    membershipLevel?: string; // Optional property
}

// Function to print user details
function printUserDetails(user: PremiumUser): void {
    console.log(`ID: ${user.id}`);
    console.log(`Name: ${user.name}`);
    console.log(`Email: ${user.email}`);
    if (user.membershipLevel) {
        console.log(`Membership Level: ${user.membershipLevel}`);
    }
}

// Example usage
const user1: PremiumUser = { id: 1, name: "Alice", email: "alice@example.com", membershipLevel: "Gold" };
const user2: PremiumUser = { id: 2, name: "Bob", email: "bob@example.com" };

printUserDetails(user1);
printUserDetails(user2);
