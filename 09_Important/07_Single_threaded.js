// When we say JS is single-threaded, it means that it has one main execution thread that processes code. So only one command runs at a time.

// JavaScript uses a single call stack, meaning that all your synchronous code (functions, loops, etc.) is executed one after the other.
// There can be no two lines of JavaScript executing simultaneously in the main thread.

// So if one function takes too long—say, a heavy computation—it can block the entire thread. This is why long-running synchronous tasks can freeze the user interface in browsers.




// But 
