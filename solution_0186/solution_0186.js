// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'number') return undefined
    let cube = arr[i] ** 3
    if (cube % 2 !== 0) {
      sum += cube
    }
  }
  return sum
}

console.log(cubeOdd([1, 2, 3, 4]), 28)
console.log(cubeOdd([-3, -2, 2, 3]), 0)
console.log(cubeOdd(['a', 12, 9, 'z', 42]), undefined)
