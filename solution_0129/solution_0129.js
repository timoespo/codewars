// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

function maxMultiple(divisor, bound) {
  let num = null
  for (let i = 0; i <= bound; i++) {
    if (i % divisor === 0) {
      num = i
    }
  }
  return num
}

console.log(maxMultiple(2, 7), 6)
console.log(maxMultiple(3, 10), 9)
console.log(maxMultiple(7, 17), 14)
