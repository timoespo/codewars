// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.

// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

var countBits = function (n) {
  let binaryString = n.toString(2)
  let count = 0
  for (let i = 0; i < binaryString.length; i++) {
    if (binaryString[i] === '1') {
      count++
    }
  }
  return count
}

console.log(countBits(0), 0)
console.log(countBits(4), 1)
console.log(countBits(7), 3)
