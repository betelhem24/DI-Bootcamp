// Exercise 8: switch Statement with Complex Conditions
// Function that returns an action based on the user role
function getAction(role) {
    // Use a switch statement to check the role
    switch (role) {
        // If role is "admin"
        case "admin":
            return "Manage users and settings";
        case "editor":
            return "Edit content";
        case "viewer":
            return "View content";
        case "guest":
            return "Limited access";
        // If role doesn't match any case above
        default:
            return "Invalid role";
    }
}
// STEP 8: Test the function with different roles
console.log(getAction("admin")); // Expected: Manage users and settings
console.log(getAction("editor")); // Expected: Edit content
console.log(getAction("viewer")); // Expected: View content
console.log(getAction("guest")); // Expected: Limited access
console.log(getAction("unknown")); // Expected: Invalid role
