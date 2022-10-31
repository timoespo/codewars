// Definition
// A number is called Automorphic number if and only if its square ends in the same digits as the number itself.

// Task
// Given a number determine if it Automorphic or not .

function automorphic(n) {
  let square = n * n
  return square.toString().endsWith(n.toString()) ? 'Automorphic' : 'Not!!'
}

console.log(automorphic(1), 'Automorphic')
console.log(automorphic(3), 'Not!!')
console.log(automorphic(53), 'Not!!')
