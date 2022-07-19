// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

function reverseWords(str) {
  return str
    .split(' ')
    .map(function (word) {
      return word.split('').reverse().join('')
    })
    .join(' ')
}

console.log(
  reverseWords('The quick brown fox jumps over the lazy dog.'),
  'ehT kciuq nworb xof spmuj revo eht yzal .god'
)
console.log(reverseWords('double  spaced  words'), 'elbuod  decaps  sdrow')
