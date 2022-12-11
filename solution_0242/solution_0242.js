// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

function isValidParentheses(str) {
  let n = 0
  for (let i = 0; i < str.length; i++) {
    if (str[i] == '(') n++
    if (str[i] == ')') n--
    if (n < 0) {
      return false
    }
  }
  return n == 0
}

console.log(isValidParentheses('('), false)
console.log(isValidParentheses(')'), false)
console.log(isValidParentheses('()'), true)
