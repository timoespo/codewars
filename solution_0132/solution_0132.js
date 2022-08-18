// You will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

function solve(s) {
  let upper = s.split('').filter((x) => x === x.toUpperCase()).length
  let lower = s.length - upper
  return upper > lower ? s.toUpperCase() : s.toLowerCase()
}

console.log(solve('code'), 'code')
console.log(solve('CODe'), 'CODE')
console.log(solve('COde'), 'code')
console.log(solve('Code'), 'code')
