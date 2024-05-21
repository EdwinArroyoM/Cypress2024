console.log("Hello World") //How to print

let a = 4
let b = 250.55  //Not necesary type of variable
var c = "Mensaje texto"
let d = true
let e = "Mensaje texto 2"


//Print a value
console.log(a)
console.log(typeof(a))

console.log(b)
console.log(typeof(b))

console.log(c)
console.log(typeof(c))

console.log(d)
console.log(typeof(d))
// for variables we use var, (let, const) ES6 var
/*
"let" we use it to assign
"var" redeclares the variable, but we need to have the first variable assigned as "var" and reassigned with "var"
*/
//Difference between var let and const

var c = a+b
console.log(c)
// We can also make declared as a "let" and then just change it
e=a+b //This is also allowed.
console.log(e) 
/*
Type "const" as the name said, it cant change the var needs to be constant, so cant change for nothing.
*/


/*
We have negation operator "!"
*/
console.log(!d) //Throws a false

