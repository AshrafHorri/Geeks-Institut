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

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => console.log(fruit));
};

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
    // user is still "John" because strings are primitive and copied by value
    let shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.paid = false;
    // shopping and groceries refer to the same object, so changes affect both
    console.log("user:", user);
    console.log("client:", client);
    console.log("groceries.totalPrice:", groceries.totalPrice);
    console.log("groceries.other.paid:", groceries.other.paid);
};

displayGroceries();
cloneGroceries();
