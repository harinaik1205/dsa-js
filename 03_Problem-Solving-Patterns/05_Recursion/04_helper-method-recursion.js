function collectOddValues(nums) {
  let result = [];

  function helper(arr) {
    if (arr.length === 0) return;
    if (arr[0] % 2 !== 0) {
      result.push(arr[0]);
    }
    helper(arr.slice(1));
  }
  helper(nums);
  return result;
}

//with pure recursion
function collectOddValues(nums, result = []) {
  if (nums.length === 0) return;
  if (nums[0] % 2 !== 0) {
    result.push(nums[0]);
    console.log(result, nums);
  }
  collectOddValues(nums.slice(1), result);
  return result;
}

//or

function collectOddValues(nums) {
  let result = [];

  if (nums.length === 0) return result;
  if (nums[0] % 2 !== 0) {
    result.push(nums[0]);
    console.log(result);
  }
  result = result.concat(collectOddValues(nums.slice(1)));
  //   console.log("concat");
  return result;
}
console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// Pure Recursion Tips:
// --> For arrays, use methods like slice, the spread operator, and concat that make copies of arrys so you do not mutate them
// --> Remember that strings are immutable so you will need to use methods like slice, substr or substring
// --> To make copies of objects use Object.assign or the spread operator
