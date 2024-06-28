module.exports = class Person{

    age = 25

    get location(){
        return 'Canada'
    }

    // Constructor is a method which executes by default when you create object of the class
    constructor(firstName, lastName){
        this.firstName = firstName
        this.lastName = lastName
    }

    //method
    fullName(){
        console.log(this.firstName+this.lastName);
    }

}

/* 
    let person = new Person('Tim', 'Joseph')
    let person2 = new Person('Chris', 'Johnes')
    console.log(person.age);
    console.log(person.location);
    console.log(person.fullName());
    console.log(person2.fullName());
*/
