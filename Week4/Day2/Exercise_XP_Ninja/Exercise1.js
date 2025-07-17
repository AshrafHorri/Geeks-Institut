const data = [
  {
    name: 'Butters',
    age: 3,
    type: 'dog'
  },
   {
    name: 'Cuty',
    age: 5,
    type: 'rabbit'
  },
  {
    name: 'Lizzy',
    age: 6,
    type: 'dog'
  },
  {
    name: 'Red',
    age: 1,
    type: 'cat'
  },
  {
    name: 'Joey',
    age: 3,
    type: 'dog'
  },
  {
    name: 'Rex',
    age: 10,
    type: 'dog'
  },
];

// Using a loop
let sumLoop = 0;
for (let animal of data) {
  if (animal.type === 'dog') {
    sumLoop += animal.age * 7;
  }
}
console.log('Sum with loop:', sumLoop);

// Using reduce
const sumReduce = data.reduce((sum, animal) => {
  if (animal.type === 'dog') {
    return sum + animal.age * 7;
  }
  return sum;
}, 0);
console.log('Sum with reduce:', sumReduce);
