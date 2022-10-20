// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice.

function repeats(arr) {
  const frequencyMap = {}
  for (let num of arr) {
    if (frequencyMap[num]) {
      frequencyMap[num]++
    } else {
      frequencyMap[num] = 1
    }
  }
  let sum = 0
  for (let num in frequencyMap) {
    if (frequencyMap[num] === 1) sum += +num
  }
  return sum
}

console.log(repeats([4, 5, 7, 5, 4, 8]), 15)
console.log(repeats([9, 10, 19, 13, 19, 13]), 19)
console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11]), 12)
console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13]), 22)
