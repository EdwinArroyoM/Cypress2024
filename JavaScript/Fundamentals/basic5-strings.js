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