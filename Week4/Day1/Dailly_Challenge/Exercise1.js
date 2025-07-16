// Daily Challenge: Pass By Value & Pass By Reference

// Initial object and variable
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

// Arrow function to display groceries
const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
}

// Arrow function to demonstrate pass by value and pass by reference
const cloneGroceries = () => {
    // Copy of client variable
    let user = client;
    // Change client variable
    client = "Betty";
    // Will we see this modification in the user variable? No, because primitive types are passed by value
    console.log("client:", client); // Betty
    console.log("user:", user);     // John
    
    // Copy of groceries object
    let shopping = groceries;
    // Change totalPrice
    shopping.totalPrice = "35$";
    // Will we see this modification in the shopping object? Yes, because objects are passed by reference
    console.log("groceries.totalPrice:", groceries.totalPrice); // 35$
    console.log("shopping.totalPrice:", shopping.totalPrice);   // 35$
    
    // Change paid status
    shopping.other.paid = false;
    // Will we see this modification in the shopping object? Yes, because objects are passed by reference
    console.log("groceries.other.paid:", groceries.other.paid); // false
    console.log("shopping.other.paid:", shopping.other.paid);   // false
}

// Invoke the functions
console.log("Displaying fruits:");
displayGroceries();

console.log("\nDemonstrating pass by value vs pass by reference:");
cloneGroceries();

/* Explanation:
1. When we copy primitive types like strings (client to user), we create a separate copy.
   Changing one doesn't affect the other because they're stored in different memory locations.

2. When we copy objects (groceries to shopping), we're only copying the reference to the object.
   Both variables point to the same object in memory, so changes to one affect the other.
   This is why changing shopping.totalPrice also changes groceries.totalPrice.
*/