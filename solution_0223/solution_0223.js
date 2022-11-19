// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

function order(words) {
  let array = words.split(' ')
  let sortedArray = []
  for (i = 0; i <= array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j].indexOf(i) >= 0) {
        sortedArray.push(array[j])
      }
    }
  }
  return sortedArray.join(' ')
}

console.log(order('is2 Thi1s T4est 3a'), 'Thi1s is2 3a T4est')
console.log(
  order('d4o dru7nken sh2all w5ith s8ailor wha1t 3we a6'),
  'wha1t sh2all 3we d4o w5ith a6 dru7nken s8ailor'
)
