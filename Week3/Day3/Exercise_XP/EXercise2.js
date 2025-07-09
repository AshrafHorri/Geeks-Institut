const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
};

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
};

const shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let totalPrice = 0;
    for (const item of shoppingList) {
        if (stock[item] > 0) {
            totalPrice += prices[item];
            stock[item]--;
        }
    }
    return totalPrice;
}

const bill = myBill();
console.log(bill);