// Problem statement:

// --> Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that inludes both values that sum to zero or undefined if a pair does not exist

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3])); // [-3,3]
console.log(sumZero([-2, 0, 1, 3])); // undefined
console.log(sumZero([1, 2, 3])); // undefined
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3], [-3, 3]));

//Naive solution

function sumZero(arr) {
  //iterate over the loop, i =0
  for (let i = 0; i < arr.length; i++) {
    // iterate over the loop with start j = i + 1
    for (let j = i + 1; j < arr.length; j++) {
      // check if sum of arr[i] + arr[j] === 0,
      if (arr[i] + arr[j] === 0) return [arr[i], arr[j]];

      // if equals to zero return array with [arr[i], arr[j]]
    }
  }
}

//Refactored approach
function sumZero(arr) {
  console.log("ref");
  //Intialiaze start and end variables
  let start = 0;
  let end = arr.length - 1;
  while (start < end) {
    const sum = arr[start] + arr[end];
    if (sum === 0) {
      return [arr[start], arr[end]];
    } else if (sum > 0) {
      end--;
    } else {
      start++;
    }
  }
}
