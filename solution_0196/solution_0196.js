// Write a function reverse which reverses a list (or in clojure's case, any list-like data structure)

reverse = function reverse(arr) {
  let reversed = []
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i])
  }
  return reversed
}

console.log(reverse([1, 2, 3]), [3, 2, 1])
console.log(reverse([1, null, 14, 'two']), ['two', 14, null, 1])
