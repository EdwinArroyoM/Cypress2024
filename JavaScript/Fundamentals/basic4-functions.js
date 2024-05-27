//Functions

function add(a,b) {
    return a+b  // We need to return the operation
}
add(2,3)

let sum = add(2,3)
console.log(sum);

//Anonimous function do not have name => Function Expression

let sumOfIntegers = function (c,d) { //Is doing the same and is more cleaner
    return c+d
    
}

//We can also use the next syntax "=>"
let sumOfNumbers = (c,d) => c+d 
console.log(sumOfNumbers(3,3))

//Scope
// var - global level / functional only works on those levels
// let - global level/block level "{}"
// const - value will never change EG: locators for an automation.
var greet = "Evening"
let greetings = "Day"
greetings = "night"

if (1==1) {
    var greet = "Afternoon"
    let greetings = "May"
}

function add(a,b) {
    var greet = "Night"
    let greetings = "Feb"
    return a+b 
}