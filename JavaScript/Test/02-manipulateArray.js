/* 
    Manipulate an array of strings (add, remove, sort)
    Create an array named studentNames with the names of your students.
    Add a new student name to the beginning of the array.
    Remove the last student name from the array.
    Alphabetize the student names within the array.
*/
var students = ['Edwin', 'Luis', 'Manuel', 'Ramon', 'Chema']
students.push('Chris')

console.log(students);
// Sort alphabetically
console.log(students.sort());
// Remove last studen
console.log(students.pop());
console.log(students); 