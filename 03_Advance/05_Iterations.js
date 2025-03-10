/*  Iterations also called loops. The most basic loop is "for loop".
    First our index is assigned value. Then condition is checked.
    Then we jump to block scope where our data is console logged.
    After that, our index value is incremented. Then we check the condition again.
    
    Loop keep running until condition is false. Then we jump out of for loop.
*/
for(let index = 1; index <= 5; index++) {
    // console.log(index)
}

// break: keyword allow you to stop loop at that point.
for(let i = 1; i < 5 ; i++) {
    if(i == 3) {
        console.log("Breaking at 3")
        break
    }
    console.log(i)
}

// continue: keyword allow you to skip that iteration only once.
for(let i = 1; i < 5 ; i++) {
    if(i == 3) {
        console.log("Skip at 3")
        continue
    }
    console.log(i)
}
