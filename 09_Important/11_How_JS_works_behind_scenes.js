                +--------------------------------+
                |     JavaScript Code            |
                +--------------------------------+
                              │
                              ▼
                +--------------------------------+
                |   Parser & Compiler            | 
                | (Code is parsed into an AST,   |
                |  then compiled/interpreted)    |
                +--------------------------------+
                              │
                              ▼
                +--------------------------------+
                |      Execution Context         | 
                |  (Global & Function contexts)  |
                +--------------------------------+
                              │
                              ▼
                +--------------------------------+
                |           Call Stack           |
                |   (Synchronous code execution) |
                +--------------------------------+
                              │
                              ▼
                    /---------------------\
                    |  Synchronous Tasks  |
                    \---------------------/
                              │
                              ▼
                +--------------------------------+
                |      External (Web) APIs       |
                |   (Timers, HTTP requests, DOM  |
                |      events, etc, running      |
                |     outside the engine)        |
                +--------------------------------+
                              │
                              ▼
                +--------------------------------+
                |       Callback Queues          |
                |  ┌─────────────┬────────────┐  |
                |  | Microtask   | Macrotask  |  | <-- Asynchronous callbacks
                |  |   Queue     | Queue      |  |     (e.g., Promise, setTimeout)
                |  └─────────────┴────────────┘  |
                +--------------------------------+
                              │
                              ▼
                +--------------------------------+
                |           Event Loop           |
                | (Monitors the call stack and   |
                |  queues; schedules tasks when  |
                |    the stack is empty)         |
                +--------------------------------+
                              │
                              ▼
                +--------------------------------+
                |      DOM Manipulation          |
                | (JS code interacts & updates   |
                |            the DOM)            |
                +--------------------------------+
                              │
                              ▼
                +--------------------------------+
                |      Rendering Engine          |
                |  (Browser paints the updated   |
                |            DOM)                |
                +--------------------------------+
                              │
                              ▼
                +--------------------------------+
                |       Web Page Output          |
                +--------------------------------+

