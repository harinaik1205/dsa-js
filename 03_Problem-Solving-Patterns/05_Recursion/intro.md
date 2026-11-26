Recursion:

What is Recursion?
--> A process (a function in our case) that calls itself

Why do i need to know this?
--> It's everywhere

Examples:
--> JSON.parse/JSON.stringify
--> document.getElementById and DOM traversal algorithms

How recursive functions work:
--> Invoke the same function with a different input until you reach your base case!

Base Case:
--> The condition when the recursion ends
--> This is the most important concept to understand

Two essential parts of a recursive function:
--> 1. Base Case
--> 2. Different Input

Where Things go wrong:
--> No base case/wrong base case
--> Forgetting to return or returning the wrong thing
--> Stack overflow

Examples:
function factorial(num){
if(num === 1) return 1;
return num \* factorial(num) // passing same input
}

function factorial(num){
if(num === 1) console.log(1); // not returning
return num \* factorial(num)
}
