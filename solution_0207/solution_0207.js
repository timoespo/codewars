// Definition
// Strong number is the number that the sum of the factorial of its digits is equal to number itself.

// For example, 145 is strong, since 1! + 4! + 5! = 1 + 24 + 120 = 145.

// Task
// Given a number, Find if it is Strong or not and return either "STRONG!!!!" or "Not Strong !!".

// Notes
// Number passed is always Positive.
// Return the result as String

function isStrongNumber(number) {
  const numDigits = number.toString().split('')

  const sumOfFactorials = numDigits.reduce((a, b) => {
    return a + factorial(parseInt(b))
  }, 0)

  return sumOfFactorials === number ? 'STRONG!!!!' : 'Not Strong !!'

  function factorial(n) {
    return n === 0 ? 1 : n * factorial(n - 1)
  }
}

console.log(isStrongNumber(1), 'STRONG!!!!')
console.log(isStrongNumber(145), 'STRONG!!!!')
console.log(isStrongNumber(7), 'Not Strong !!')
