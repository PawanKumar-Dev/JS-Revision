// reduce() method also takes a callback function.
// But reduce() specialize in summing up whole array and giving you its grand total.

// For example, assume we want sum total of "mySampleArray" values.
const mySampleArray = [ 1, 2, 3 ]


const mySumTotal1 = mySampleArray.reduce(function(accumulator, currentValue) {
    return accumulator + currentValue
}, 0)

const mySumTotal2 = mySampleArray.reduce((accumulator, currentValue)=> accumulator + currentValue, 0)

console.log(mySumTotal1)  //Gives us the sum-total of 6
console.log(mySumTotal2)  //Gives us the sum-total of 6
