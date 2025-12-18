//  Exercise 5: Generic Constraints
// Generic function constrained to types with a length property
function logLength(item) {
    console.log(item.length); // Log the length
}
// Examples
logLength("Hello, world!"); // 13
logLength([1, 2, 3, 4]); // 4
logLength({ length: 10 }); // 10
