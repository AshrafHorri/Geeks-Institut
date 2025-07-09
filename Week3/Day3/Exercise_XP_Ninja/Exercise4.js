function biggestNumberInArray(arrayNumber) {
    let max = 0;
    for (let val of arrayNumber) {
        if (typeof val === 'number' && val > max) {
            max = val;
        }
    }
    return max;
}

const array = [-1,0,3,100,99,2,99];
const array2 = ['a',3,4,2];
const array3 = [];
console.log(biggestNumberInArray(array));
console.log(biggestNumberInArray(array2));
console.log(biggestNumberInArray(array3));
