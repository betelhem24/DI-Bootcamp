// Daily Challenge: Union Type Validator
// Function to validate if a value matches any of the allowed types
function validateUnionType(value, allowedTypes) {
    for (var _i = 0, allowedTypes_1 = allowedTypes; _i < allowedTypes_1.length; _i++) {
        var type = allowedTypes_1[_i];
        if (typeof value === type) {
            return true; // value matches an allowed type
        }
    }
    return false; // no match found
}
// Test the function with different variables
console.log(validateUnionType("hello", ["string", "number"]));
console.log(validateUnionType(42, ["string", "number"]));
console.log(validateUnionType(true, ["string", "number"]));
console.log(validateUnionType(false, ["boolean"]));
