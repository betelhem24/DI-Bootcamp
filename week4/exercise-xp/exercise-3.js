// Exercise 3: User & ID


// Original users object
const users = { user1: 18273, user2: 92833, user3: 90315 };

// Part 1: Convert object to array of [key, value] pairs
const usersArray = Object.entries(users);
console.log(usersArray);
// Expected output: [ ['user1', 18273], ['user2', 92833], ['user3', 90315] ]

// Part 2: Multiply each user's ID by 2
const doubledUsersArray = usersArray.map(([user, id]) => [user, id * 2]);
console.log(doubledUsersArray);
// Expected output: [ ['user1', 36546], ['user2', 185666], ['user3', 180630] ]
