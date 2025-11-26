
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
}


// QUESTION 1: Create displayGroceries using forEach

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

displayGroceries();


// QUESTION 2: Create cloneGroceries

const cloneGroceries = () => {
    let user = client;

    client = "Betty";

    console.log("user:", user); 
    // user stays "John" because strings are copied by value

    let shopping = groceries;

    // Change totalPrice
    shopping.totalPrice = "35$";

    console.log("groceries.totalPrice:", groceries.totalPrice);
    
    shopping.other.paid = false;

    console.log("groceries.other.paid:", groceries.other.paid);
    // groceries.other.paid also changes for the same reason
};


cloneGroceries();
