// We can chain map(), filter() one after another to reach get desired result. Also called "Method Chaining".
const myArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

const newArray = myArray
                .map((item) => item * 10)           //at this stage we get: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
                .map((item) => item + 1)            //at this stage we get: [11, 21, 31, 41, 51, 61, 71, 81, 91, 101]
                .filter((item) => item >= 40)       //at this stage we get: [41, 51, 61, 71, 81, 91, 101]

console.log(newArray)

// New method can be keep chaining as much as we want.