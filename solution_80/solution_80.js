// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(arr) {
  for (let i = 0; i < arr.length; i++) {
    let char = String.fromCharCode(arr[i])
    if ('aeiou'.indexOf(char) !== -1) {
      arr[i] = char
    }
  }
  return arr
}

console.log(isVow([100, 100, 116, 105, 117, 121]), [
  100,
  100,
  116,
  'i',
  'u',
  121,
])
