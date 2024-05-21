const flag = true

// IF & ELSE
if (!flag){
    console.log("Condition satisfied")
}else {
    console.log(flag)
    console.log("Condition not satisfied")
}


// WHILE & DO WHILE   
let i=0
while(i>10){
    i++
    console.log("Im inside the loop ",i);
}

do {
    i++
} while (i>10);
console.log(i);

// FOR loop

for (let k = 0; k <= 10; k++) {
    console.log(k);
}

let required = true
while(required){
    console.log(required);
    required = false
}





// From 1 to 10 give me common multiple values of 2 and 5
// Only consider first three values given.
console.log("***********************");
let n = 0

for (let i = 1; i <= 100; i++) {
    if(i%2 == 0 && i%5 == 0){
        n++
        console.log(i);
        if (n == 3) {
            break
        }
    }    
}