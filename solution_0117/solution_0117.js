// Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

// a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.

// The four operators are "add", "subtract", "divide", "multiply".

// A few examples:(Input1, Input2, Input3 --> Output)

// 5, 2, "add"      --> 7
// 5, 2, "subtract" --> 3
// 5, 2, "multiply" --> 10
// 5, 2, "divide"   --> 2.5

function arithmetic(a, b, operator) {
  operatorTable = { add: '+', subtract: '-', multiply: '*', divide: '/' }
  return eval(`a ${operatorTable[operator]} b`)
}

console.log(arithmetic(1, 3, 'add'), 4)
console.log(arithmetic(8, 2, 'subtract'), 6)
console.log(arithmetic(5, 2, 'multiply'), 10)
console.log(arithmetic(8, 2, 'divide'), 4)
