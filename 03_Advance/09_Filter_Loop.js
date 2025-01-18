// filter() loop is similar to forEach() loop since they both take a callback function and then iterate them. Both are inbuilt array methods.
// But unlike forEach() loop where we excute something, filter() loop return us data.
// Hence filter is often used to return things based on some condition
const myArray = [1, 2, 3, 4, 5, 6, 7, 8]

const myFilteredData = myArray.filter((item) => item > 5)

// Returns [ 6, 7, 8 ]
console.log(myFilteredData)