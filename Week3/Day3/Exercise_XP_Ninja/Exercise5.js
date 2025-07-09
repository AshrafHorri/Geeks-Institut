function uniqueElements(arr) {
    return [...new Set(arr)];
}

const list = [1,2,3,3,3,3,4,5];
const newList = uniqueElements(list);
console.log(newList); // [1,2,3,4,5]
