// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.

// Examples
// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  let obj = {}
  arr.map((v) => (obj[v] = obj[v] ? obj[v] + 1 : 1))
  let ans = 0
  let ans1 = 0
  for (let num in obj) {
    num = num * 1
    if (obj[num] >= ans) {
      ans = obj[num]
      ans1 = num
    }
  }
  return ans1
}

console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12]), 12)
console.log(highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12, 10]), 12)
console.log(highestRank([12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]), 3)
