const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);


const index = people.indexOf("James");
if (index !== -1) {
  people[index] = "Jason";
}
console.log(people);


people.push("Achraf");
console.log(people);

const maryIndex = people.indexOf("Mary");
console.log(maryIndex);

const newPeople = people.slice(1, 3);
console.log(newPeople);


console.log(people.indexOf("Foo"));


 const last = people[people.length - 1];
 console.log(last);


 // Part II - Loops
 for( let i = 0; i < people.length; i++)
 {
    console.log(people[i]);
 }


for( let i = 0; i < people.length; i++)

    if(people[i] !== "Devon")
        console.log(people[i]);
    else {
        break;
 }