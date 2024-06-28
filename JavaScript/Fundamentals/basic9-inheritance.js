//Inheritance is the Main Pillar in Object oriented Programming
//one class can inherit/acquire the properties, Methods of another class
//The class which inherits the properties of other is known as subclass (derived class, child c]
//the class whose properties are inherited is known as superclass

const Person = require("./basic7-classesFile");

//Father Class -> Child classes

class Pet extends Person{
    
    
    get location(){
        return "BlueCross"
    }
    
    constructor(firstName, lastName){

        //Call parent class constructor "super"
        super(firstName, lastName)
    }
}
let pet = new Pet("Sam", "Sam")
pet.fullName()
console.log(pet.location); 