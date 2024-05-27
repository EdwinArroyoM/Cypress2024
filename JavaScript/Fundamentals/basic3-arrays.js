// Arrays
let marks = Array(6)
var marks2 = new Array(20,40,35,12,37,100)
var marks2 = [20,40,35,12,37,100]


console.log(marks2[3]); //35
//change values directly
marks2[3] = 14 
console.log(marks2[3]); //14
// Show all values 
console.log(marks2);
console.log(marks2.length); //6
// Insert element to the array
marks2.push(150)
console.log(marks2); // [ 20, 40, 35, 14, 37, 100, 150 ]
// Delete last element
marks2.pop()
console.log(marks2); // [ 20, 40, 35, 14, 37, 100 ]
// Add element at the begining
marks2.unshift(150)
console.log(marks2); // [ 150, 20, 40, 35, 14, 37, 100 ]
// Know the position of an element
console.log(marks2.indexOf(100));
console.log(marks2.includes(120))
//Create subarray from the array like a section "Slice"
console.log(marks2.slice(2,5));
subMarks = marks2.slice(2,5)
console.log(subMarks);

//iterate the array print all the elements
// Sum all the values

var sum = 0
for (let i = 0; i < marks2.length; i++) {
    //console.log(marks2[i]);
    sum = sum + marks2[i]  
}console.log(sum);

//Reduce filter map, acummulate the values
let total = marks2.reduce((sum,mark)=>sum+mark,0)
console.log(total);


// Create new array with even numbers of scores array
var scores = [12,13,14,16]
var evenScores = []

for (let i = 0; i < scores.length; i++) {
    if (scores[i]%2 == 0) {
        evenScores.push(scores[i])
    }
}
console.log(evenScores);
let newFilterScores = scores.filter(score=> score%2 == 0) //[ 12, 14, 16 ]
console.log(newFilterScores);

//Map
//Create new array with even numbers of scores array and Multipply each value *3
 let mappedArray = newFilterScores.map(score=>score*3)
 console.log(mappedArray); //[ 36, 42, 48 ]


//Test
//Create new array with even numbers of scores array and Multipply some values *3
let numbersOfTheArrayFiltered = scores.filter(score => score %2 == 0)
let multiplyFilteredValues = numbersOfTheArrayFiltered.map(score => score*3)
console.log(multiplyFilteredValues);

//Test
//Sum all the values
let totalValues = multiplyFilteredValues.reduce((sum,val)=>sum+val,0)
console.log(totalValues);

var scores1 = [12,13,14,16] // You can do evverything on a single line
let sumValues = scores1.filter(score=> score%2 == 0).map(score=>score*3).reduce((sum,val)=>sum+val,0)
console.log(sumValues);

let fruits =["Banana","Mango","pomgranade","apple"]
console.log(fruits.sort()); 
console.log(fruits.reverse());


var scores1 = [12,003,19,16, 14]
console.log(scores1.sort())
// scores1.sort(function (a,b) {
//     return a-b
// })
// console.log(scores1);
console.log(scores1.sort((a,b)=> a-b));
console.log(scores1.sort((a,b)=> b-a));