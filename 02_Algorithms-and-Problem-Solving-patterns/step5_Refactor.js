// Refactor:

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

// Refactored code:

function check(char) {
  const code = char.charCodeAt(0);
  if (!(code > 47 && code < 58) && !(code > 96 && code < 123)) {
    return false;
  }
  return true;
}

function charCountRefactored(str) {
  const result = {};
  for (let char of str) {
    //regular expression
    // if (/[a-z0-9]/.test(char)) {
    //   result[char] = ++result[char] || 1;
    // }

    if (check(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  return result;
}
