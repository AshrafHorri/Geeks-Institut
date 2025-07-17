const letters = ['x', 'y', 'z', 'z'];

// Using a for loop
const countObj = {};
for (let letter of letters) {
    countObj[letter] = (countObj[letter] || 0) + 1;
}
console.log(countObj);

// Using reduce
const countObjReduce = letters.reduce((acc, letter) => {
    acc[letter] = (acc[letter] || 0) + 1;
    return acc;
}, {});
console.log(countObjReduce);
