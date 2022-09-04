// Complete the method which accepts an array of integers, and returns one of the following:

// "yes, ascending" - if the numbers in the array are sorted in an ascending order
// "yes, descending" - if the numbers in the array are sorted in a descending order
// "no" - otherwise
function isSortedAndHow(array) {
  let ascending = array.filter((e, i, a) => e > a[i + 1]).length == 0
  let descending = array.filter((e, i, a) => e < a[i + 1]).length == 0

  return ascending ? 'yes, ascending' : descending ? 'yes, descending' : 'no'
}

console.log(isSortedAndHow([15, 7, 3, -8]), 'yes, descending')
console.log(isSortedAndHow([4, 2, 30]), 'no')
