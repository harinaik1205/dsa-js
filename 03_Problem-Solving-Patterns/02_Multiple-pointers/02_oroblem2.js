// problem statement:
// --> Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); // 0

console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

console.log(countUniqueValues([-2, -1, -1, 0, 1, 1, 2]));
// Output: 5

console.log(countUniqueValues([1, 1, 2, 2, 3, 3])); // Output: 3

//Navie approach 1
function countUniqueValues(arr) {
  return new Set(arr).size;
}

// approach 2
function countUniqueValues(arr) {
  const obj = {};
  for (const num of arr) {
    obj[num] = obj[num] + 1 || 1;
  }

  return Object.keys(obj).length;
}

//pointers approach
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = i + 1;
  let count = 1;
  while (j < arr.length) {
    // console.log(j);
    if (arr[i] !== arr[j]) count++;
    i++;
    j++;
  }

  return count;
}

// another approach
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  //   console.log(arr);
  return i + 1;
}
