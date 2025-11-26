// Daily challenge: Groceries

// GIVEN VARIABLES
let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        paid : true,
        meansOfPayment : ["cash", "creditCard"]
    }
};


// Step 1: Create displayGroceries using forEach
const displayGroceries = () => {
    groceries.fruits.forEach((fruit) => {
        console.log(fruit);
    });
};

displayGroceries();


// Step 2: Create cloneGroceries
const cloneGroceries = () => {

    // Copying a primitive (string)
    let user = client;
    client = "Betty";
    console.log("user:", user);  
    // user stays "John" because primitives are copied by value

    // Copying an object (reference)
    let shopping = groceries;

    // Changing the object through shopping
    shopping.totalPrice = "35$";
    console.log("groceries.totalPrice:", groceries.totalPrice);

    shopping.other.paid = false;
    console.log("groceries.other.paid:", groceries.other.paid);
};

cloneGroceries();
