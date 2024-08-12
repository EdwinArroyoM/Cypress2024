/* 
    Calculate basic statistics (total, max, min) using for loop and if else condition logics
    Create an array called expenses that contains at least 5 different expense amounts.
    Calculate the total expenses by summing all the elements of the array.
    Find the highest and lowest individual expenses within the array.
*/
var statistics = new Array (12, 22.5, 85, 187, 64)

//var sum = 0
//for (let i =0; i < statistics.length ; i++) {
//    sum = sum + statistics[i]
//} console.log(sum)
let totalValues = statistics.reduce((sum,val)=>sum+val,0)

console.log(totalValues)
console.log(statistics.sort())
console.log(statistics.reverse())
//------------------------------------

var statistics =  [12, 22.5, 85, 187, 64]
var highestExpense = statistics[0]
var lowestExpense = statistics[0]

//var sum = 0
//for (let i =0; i < statistics.length ; i++) {
//    sum = sum + statistics[i]
//} console.log(sum)
let totalValues1 = statistics.reduce((sum,val)=>sum+val,0)

console.log('Total Expenses: ', totalValues1)
//console.log(statistics.sort())

for (let i =0; i < statistics.length ; i++) {
    //Find Highest
    if(statistics[i]>highestExpense){
        highestExpense = statistics[i]
    }
    //Find Lowest
    if(statistics[i] < lowestExpense){
        lowestExpense = statistics[i]
    }
}

console.log('Highest Expenses: ',highestExpense)
console.log('Lowest Expenses: ',lowestExpense)
//console.log(statistics.reverse())
