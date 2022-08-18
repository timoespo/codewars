// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

const minValue = (values) => +[...new Set(values)].sort().join('')

console.log(minValue([1, 3, 1]), 13)
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679)
