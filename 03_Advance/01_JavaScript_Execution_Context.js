/*  JS Execution Context let us understand the environment in which JS is running. Where functions, variables are processed and executed.
    There are mainly two execution context with one additional which is less used.
    1. Global Execution Context : This context always run when we execute any JS code. "this" keyword in here refers to "window" object in case of browser. But in Node JS environment it refers "global" object.
    2. Function Execution Context: This context runs for functions only.
    3. Eval Execution Context
*/

/*  Every Execution Context process our code in mainly two steps:
    1. Memory Creation Phase / Creation Phase :  Variables & functions first get allocted memory space as undefined, functions get assigned their defination only. Nothing else.
    2. Execution Phase: Variables get assigned values and then get executed. Functions get their own execution context inside Function execution context.
*/

// JS uses a call stack to manage execution contexts. The stack ensures that execution contexts are processed in a Last In, First Out (LIFO) order.
function one() {
    console.log("One")
}

function two() {
    console.log("Two")
}

function three() {
    console.log("Three")
}

// Here our call-stack is simple. Each function execute and deleted from call-stack.
one()
two()
three()


// Thing change in Call-stack if functions are passed as callback functions.
function aOne() {
    console.log("aOne")
    bTwo()
}

function bTwo() {
    console.log("bTwo")
    cThree()
}

function cThree() {
    console.log("cThree")
}

aOne()
bTwo()
cThree()

// You can run above code in broswer Source > Snippets tab. That will show you how call stack is called and reset.

/* Summary:
1. JS creates Global Execution Context.
2. Next it creates Memory Phase.
3. Memory phase :- In this phase, variables are set to 'undefined' until the execution phase(next phase) and the functions are set to their definitions.
4. Next it creates the Execution Phase.
5. Execution Phase - In this phase, variables are assigned given values and when the functions are called, it creates a Memory Phase and Execution Phase for the function just like the Global Execution Context.
*/
