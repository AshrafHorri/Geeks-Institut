// Exercise 3: Analyzing
// Instructions: Analyze these pieces of code before executing them. What will be the outputs?

// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];
// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

/*
Analysis for snippet 1:
This code uses the spread operator (...) to combine arrays.
- We start with ['bread']
- Then spread the vegetables array ["carrot", "potato"]
- Add 'chicken'
- Finally spread the fruits array ["apple", "orange"]

The output will be:
['bread', 'carrot', 'potato', 'chicken', 'apple', 'orange']
*/

// ------2------
// const country = "USA";
// console.log([...country]);

/*
Analysis for snippet 2:
The spread operator can also be used with strings, where it splits the string into an array of individual characters.
- "USA" becomes ['U', 'S', 'A']

The output will be:
['U', 'S', 'A']
*/

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

/*
Analysis for bonus snippet:
This is tricky. The expression [,,] creates an array with 3 elements, but 2 of them are empty slots (holes).
- [,,] is an array with 3 elements: [undefined, undefined, undefined] but with empty slots
- When we spread this array with ...[], the empty slots are preserved

The output will be:
[undefined, undefined]

Note: The spread operator preserves the empty slots in the array, but doesn't add an extra undefined at the end.
*/