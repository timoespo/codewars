// Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
function triangular(n) {
  return n > 0 ? (n * (n + 1)) / 2 : 0
}

console.log(triangular(2), 3)
console.log(triangular(4), 10)
console.log(triangular(-454), 0)
