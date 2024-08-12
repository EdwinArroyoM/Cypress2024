/* 
    Apply transformations and calculations to array elements, and filter elements based on a condition

    - You have an array called productPrices with various product prices.
    - Apply a 10% discount to all prices using the map method and store the results in a new array called discountedPrices.
    - Use the filter method to create a new array called affordableProducts containing only products priced below $50
    - Calculate the total cost of all items in the affordableProducts array using the reduce method.
*/
var productPrices  = [15, 240, 46, 340, 76, 30, 12]

let discountedPrices = productPrices.map(prices => prices*.90)
console.log('Discounted prices: ', discountedPrices);

let affordableProducts = productPrices.filter(afordable => afordable<50)
console.log('Affordable products : ', affordableProducts);

let costOfAllAffordableProducts = affordableProducts.reduce((sum,prices)=>sum+prices,0)
console.log('Discounted prices: ', costOfAllAffordableProducts);