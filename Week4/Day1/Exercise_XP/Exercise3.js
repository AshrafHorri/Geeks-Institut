const isString = (value) => {
    return typeof value === 'string';
};

console.log(isString('hello')); 
console.log(isString([1, 2, 4, 0]));
