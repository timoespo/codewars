// A balanced number is a number where the sum of digits to the left of the middle digit(s) and the sum of digits to the right of the middle digit(s) are equal.

// If the number has an odd number of digits, then there is only one middle digit. (For example, 92645 has one middle digit, 6.) Otherwise, there are two middle digits. (For example, the middle digits of 1301 are 3 and 0.)

// The middle digit(s) should not be considered when determining whether a number is balanced or not, e.g. 413023 is a balanced number because the left sum and right sum are both 5.

// The task
// Given a number, find if it is balanced, and return the string "Balanced" or "Not Balanced" accordingly. The passed number will always be positive.

function balancedNum(number) {
  let string = String(number),
    result = 0
  for (let i = 0; i < string.length / 2 - 1; i++) {
    result += Number(string[i] - Number(string[string.length - 1 - i]))
  }
  return result == 0 ? 'Balanced' : 'Not Balanced'
}

console.log(balancedNum(413023), 'Balanced')
console.log(balancedNum(7), 'Balanced')
console.log(balancedNum(432), 'Not Balanced')
console.log(balancedNum(424), 'Balanced')
