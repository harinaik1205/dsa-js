// Solve/Simplify:

// 1. Find the code difficulty in what you're trying to do.
// 2. Temporarily ignore that difficulty
// 3. Write a simplified solution
// 4. Then incorporate that difficulty back in

function charCount(str) {
  // make object to return at end;
  const result = {};
  // loop over string, for each character...
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    //if the char is a number/string AND is a ley in object, add one to count
    if (result[char] > 0) {
      result[char]++;
      //if the char is a number/letter and not in object, add it to object and set value to 1
    } else {
      result[char] = 1;
    }
  }
  //if character is something else (space, special characters etc...)
  // return object at end
  return result;
}
