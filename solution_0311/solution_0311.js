// In mathematics, Pascal's triangle is a triangular array of the binomial coefficients

// where n denotes a row of the triangle, and k is a position of a term in the row.

// Pascal's Triangle

// You can read Wikipedia article on Pascal's Triangle for more information.

// Task
// Write a function that, given a depth n, returns n top rows of Pascal's Triangle flattened into a one-dimensional list/array.

// Example:
// n = 1: [1]
// n = 2: [1,  1, 1]
// n = 4: [1,  1, 1,  1, 2, 1,  1, 3, 3, 1]

function pascalsTriangle(n) {
  let pascal = []
  let index = 0

  for (let i = 0; i < n; i++) {
    index = pascal.length - i
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) {
        pascal.push(1)
      } else {
        pascal.push(pascal[index + j] + pascal[index + j - 1])
      }
    }
  }
  return pascal
}
