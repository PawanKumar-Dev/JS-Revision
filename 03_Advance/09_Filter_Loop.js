// filter() loop is similar to forEach() loop since they both take a callback function and then iterate them.
// Both are inbuilt array methods.
// But unlike forEach() loop where we execute something, filter() loop return us data not execute anything.
// Hence filter is often used to return things based on some condition
const myArray = [1, 2, 3, 4, 5, 6, 7, 8]


// Shortform works because we haven't opened any scope{}. Also known as "implicit return".
const myFilteredData1 = myArray.filter((item) => item > 5)


// When we use {} scope then we must use "return" keyword. Also known as "explicit return".
const myFilteredData2 = myArray.filter((item) => {
    if(item > 5)
    return item
})

// Returns [ 6, 7, 8 ]
console.log(myFilteredData1)
console.log(myFilteredData2)


// Now let's see how we access data from 'array of objects' using filter() loop. This useful when user use filters in website.
const arrOfUsers = [
    { id: 1, name: "Alice", age: 25 },
    { id: 2, name: "Bob", age: 30 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "Diana", age: 35 },
]

// E.g., user request for data about users who are older than 30
const usersAgeData = arrOfUsers.filter((item)=> item.age >= 30)

const usersIdData = arrOfUsers.filter((item)=> {return item.id >= 3})


console.log(usersAgeData)
console.log(usersIdData)
