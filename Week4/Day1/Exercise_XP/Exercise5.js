function convertKgToGrams(weightInKg) {
    return weightInKg * 1000;
}

console.log(convertKgToGrams(2));

const convertKgToGramsExpression = function(weightInKg) {
    return weightInKg * 1000;
};

console.log(convertKgToGramsExpression(3));

const convertKgToGramsArrow = weightInKg => weightInKg * 1000;

console.log(convertKgToGramsArrow(4));
