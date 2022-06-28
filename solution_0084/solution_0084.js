// Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

function getSumOfDigits(integer) {
  let sum = 0
  let digits = Math.floor(integer).toString()
  for (let i = 0; i < digits.length; i++) {
    sum += +digits[i]
  }
  return sum
}

console.log(getSumOfDigits(123), 6)
console.log(getSumOfDigits(223), 7)
