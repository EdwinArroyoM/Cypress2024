//Strings
let day = "tuesday "
console.log(day.length); //8

let subDay = day.slice(0,4)
console.log(subDay);
console.log(day[1]);
let splitDay = day.split("s")
console.log(splitDay);
console.log(splitDay[1]);
console.log(splitDay[1].length);
console.log(splitDay[1].trim().length);
console.log('--------------------------------------');
// How can we make a sustraction within a text PARSE
let date = '23'
let nextDate = '27' 
let differenceDates = parseInt(nextDate) - parseInt(date)
console.log('Difference betwen dates: %d', differenceDates);

//Concatenate

let newQuote = day+ "is Funday day"
console.log(newQuote);
 let val = newQuote.indexOf("day", 5) //14
 let val2 = newQuote.indexOf("day") //14
 console.log(val);
 console.log(val2);
 //---------------------------------------------------

//newQuote = tuesday is Funday
let count = 0
let value = newQuote.indexOf("day")
while(value!== -1){
    count++
    value = newQuote.indexOf("day",value+1)
}
console.log(count); // This basically tell us how many times the word day occurs
