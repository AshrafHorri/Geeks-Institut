// Exercise 6: Employees #2

// Given array of students
const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];

// Using filter() to create a new array containing only students who passed
const passedStudents = students.filter(student => student.isPassed);

console.log("Students who passed:");
console.log(passedStudents);

// Bonus: Chain filter with forEach to congratulate students who passed
console.log("\nCongratulating students who passed:");
students
    .filter(student => student.isPassed)
    .forEach(student => {
        console.log(`Good job ${student.name}, you passed the course in ${student.course}`);
    });