// filter() loop is similar to forEach() loop since they both take a callback function and then iterate them. Both are inbuilt array methods.
// But unlike forEach() loop where we excute something, filter() loop return us data.
// Hence filter is often used to return things based on some condition
const myArray = [1, 2, 3, 4, 5, 6, 7, 8]


// Short form works because we have put everything in just one. Also known as "implicit return".
const myFilteredData1 = myArray.filter((item) => item > 5)


// When we use {} scope then we must use "return" keyword. Also known as "explicit return".
const myFilteredData2 = myArray.filter((item) => {
    if(item > 5)
    return item
})

// Returns [ 6, 7, 8 ]
console.log(myFilteredData1)
console.log(myFilteredData2)