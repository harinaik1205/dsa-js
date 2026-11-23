// An Example:
//Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

console.log(same([1, 2, 3], [4, 1, 9])); // true
console.log(same([1, 2, 3], [1, 9])); // false
console.log(same([1, 2, 1], [4, 4, 1])); // false

//navive approach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  //iteareate over the first loop,
  for (const num of arr1) {
    // findIndex of quared value in arr2 using findIndex
    const index = arr2.indexOf(num ** 2);
    // console.log(arr1[i], index);
    // if not return false
    if (index === -1) return false;
    // else remove arr2 value then continue
    arr2.splice(index, 1);
    // console.log(arr2);
  }

  return true;
}

// refacor apporach
function same(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const num of arr1) {
    frequencyCounter1[num] = (frequencyCounter1[num] || 0) + 1;
  }
  for (const num of arr2) {
    frequencyCounter2[num] = (frequencyCounter2[num] || 0) + 1;
  }

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key ** 2]) return false;
  }

  return true;
}
