// Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

function digits(n) {
  return n.toString().length
}

console.log(digits(5), 1)
console.log(digits(10), 2)
console.log(digits(123), 3)
console.log(digits(1234), 4)
console.log(digits(12345), 5)
