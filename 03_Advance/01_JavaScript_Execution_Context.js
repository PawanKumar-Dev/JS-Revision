/*  JS Execution Context let us understand the environment in which JS is running. Where functions, variables are processed and executed.
    There are mainly two execution context with one additional which is less used.
    1. Global Execution Context : This context always run when we execute any JS code. "this" keyword in here refers to "window" object in case of browser. But in Node JS environment it refers "global" object.
    2. Function Execution Context: This context runs for functions only.
    3. Eval Execution Context
*/

/*  Every Execution Context process our code in mainly two steps:
    1. Memory Creation Phase / Creation Phase :  Variables & functions first get allocted memory space as undefined, functions get assigned their defination only. Nothing else.
    2. Execution Phase: Variables get assigned values and then get executed. Functions get their own Global execution inside Function execution context.
*/