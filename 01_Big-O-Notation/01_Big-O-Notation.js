//Big O Notation:
//  --> Big O Notation is a way to formalize fuzzy couting
//  --> It allows us to talk formally about how the runtime of algorithm grows as the inputs grow

//Big O Defination:
// --> We say that an algorithm is O(f(n)) if the no of simple operations the computer has to do is eventually less than a constant time f(n), as n increases

// --> f(n) could be linear f(n) = n
// --> f(n) could be quadratic f(n) = n^2
// --> f(n) could be constant f(n) = 1
// --> f(n) could be something entirely different

// Simplifying Big O Expressions:
//  --> constants doesn't matter
//  --> Examples: O(2n) - O(n), O(500) - O(1), O(13n^2) - O(n^2)

//  --> Smaller Terms Don't Matter
//  --> O(n+10) - O(n), O(1000n+50) - O(n), O(n^2 + 5n+10) - O(n^2)

//Big O Shorthands:
// 1. Arithemetic operations are constant
// 2. Varaible assignment is constant
// 3. Accessing elements in an array (by index) or object (by key) is constant
// 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

// time complexity:
// How can we analyze the runtime of an algorithm as the size of the inputs increases?

// Space Complexity:
// How much additional memory do we need to allocate in order to run the code in our algorithm?

// space complexity in js:
// 1. Most primitives (booleans, numbers, undefined, null) are constant space.
// 2. Strings require O(n) space (where n is the string length)
// 3. Reference types are generally O(n), where n is the length (for arrays) or the no of keys (for objects)

// Logarithms:
