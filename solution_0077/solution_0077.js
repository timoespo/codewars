// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

function shortcut(str) {
  return str
    .split('')
    .filter(function (e) {
      return ['a', 'e', 'i', 'o', 'u'].indexOf(e) == -1
    })
    .join('')
}

console.log(shortcut('Hello'), 'Hll')
console.log(shortcut('Banana'), 'Bnn')
