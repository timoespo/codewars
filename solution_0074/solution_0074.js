//Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let arr = []
  for (let i = a; i <= b; i++) {
    arr.push(i)
  }
  return arr
}

// tests
console.log(between(1, 4)) //[1,2,3,4]
console.log(between(-2, 2)) //[-2,-1,0,1,2]
