// Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.

// Example:
// For input: [3, 4, 4, 3, 6, 3]

// remove the 3 at index 0
// remove the 4 at index 1
// remove the 3 at index 3
// Expected output: [4, 6, 3]

function solve(arr) {
  let new_arr = []
  for (let i = arr.length - 1; i >= 0; i--) {
    if (!new_arr.includes(arr[i])) {
      new_arr.unshift(arr[i])
    }
  }
  return new_arr
}

console.log(solve([3, 4, 4, 3, 6, 3]), [4, 6, 3])
