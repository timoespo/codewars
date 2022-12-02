// Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.

// You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
// The array will always contain letters in only one case.

// Example:

// ['a','b','c','d','f'] -> 'e'
// ['O','Q','R','S'] -> 'P'

function findMissingLetter(arr) {
  for (let i = 1; i < arr.length; i++) {
    const currentCode = arr[i].charCodeAt(0)
    const prevCode = arr[i - 1].charCodeAt(0)
    if (currentCode - prevCode > 1) {
      return String.fromCharCode(prevCode + 1)
    }
  }
}

console.log(findMissingLetter(['a', 'b', 'c', 'd', 'f']), 'e')
console.log(findMissingLetter(['O', 'Q', 'R', 'S', 'T']), 'P')
