//Object is collection of properties

let person = {
    firtsName:'Tim',
    lastName:'Joe',
    age:24,
    fullName: function(){
        console.log(this.firtsName+this.lastName);
    }
}
console.log(person.fullName());
console.log(person.lastName);
console.log(person['lastName']);
person.firtsName = 'Tim Dane'
console.log(person.firtsName);
person.gender = 'male'
console.log(person); // { firtsName: 'Tim Dane', lastName: 'Joe', gender: 'male' }
delete person.gender
console.log(person); // { firtsName: 'Tim Dane', lastName: 'Joe' }

console.log('gender' in person); // Check if propperty exist in object

//Iterate object and print all the values of the object
for (let key in person) {
    console.log(person[key]); 
}