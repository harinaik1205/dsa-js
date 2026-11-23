// Anagrams:

// --> Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed from iceman.

console.log(validAnagram("", "")); // true
console.log(validAnagram("aaz", "zza")); // false
console.log(validAnagram("anagrams", "nagaram")); //true
console.log(validAnagram("rat", "car")); // false
console.log(validAnagram("awesome", "awesom")); // false
console.log(validAnagram("qwerty", "qeywrt")); // true
console.log(validAnagram("texttwisttime", "timetwisttext")); //true

//navie approach
function validAnagram(str1, str2) {
  // check for string lengths, it not equal return false;
  if (str1.length !== str2.length) return false;
  //sort str1
  str1 = [...str1].sort().join("");
  // sort str2
  str2 = [...str2].sort().join("");

  //iterate over the first string
  for (let i = 0; i < str1.length; i++) {
    //check, if not equal return false
    if (str1[i] !== str2[i]) return false;
  }

  //return true after the loop
  return true;
}

// refacored code using frequency counter

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (let i = 0; i < str1.length; i++) {
    frequencyCounter1[str1[i]] = frequencyCounter1[str1[i]] + 1 || 1;
    frequencyCounter2[str2[i]] = frequencyCounter2[str2[i]] + 1 || 1;
  }

  //   console.log(frequencyCounter1);
  //   console.log(frequencyCounter2);

  for (let key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) return false;
    if (frequencyCounter1[key] !== frequencyCounter2[key]) return false;
  }

  return true;
}

//antoher way using frequency counter only;

function validAnagram(first, second) {
  if (first.length !== second.length) return false;
  const lookup = {};
  for (const char of first) {
    lookup[char] = lookup[char] + 1 || 1;
  }

  for (const char of second) {
    if (!lookup[char]) return false;
    lookup[char] -= 1;
  }
  console.log("lookup", lookup);

  return true;
}
