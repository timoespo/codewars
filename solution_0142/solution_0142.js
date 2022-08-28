// Your task is to write function factorial.
function factorial(n) {
  if (n === 0 || n === 1) return 1
  for (let i = n - 1; i >= 1; i--) {
    n *= i
  }
  return n
}

console.log(factorial(0), 1)
console.log(factorial(1), 1)
console.log(factorial(4), 24)
console.log(factorial(7), 5040)
console.log(factorial(17), 355687428096000)
