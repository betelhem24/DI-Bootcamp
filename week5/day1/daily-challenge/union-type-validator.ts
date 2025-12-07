// Daily Challenge: Union Type Validator


// Function to validate if a value matches any of the allowed types
function validateUnionType(value: any, allowedTypes: string[]): boolean {
    for (let type of allowedTypes) {
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
