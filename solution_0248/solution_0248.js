// Complete the solution so that the function will break up camel casing, using a space between words.

// Example
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
function breakCamelCase(str) {
  let result = ''
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      result += ' '
    }
    result += str[i]
  }
  return result
}

console.log(breakCamelCase('camelCasing'), 'camel Casing')
console.log(breakCamelCase('identifier'), 'identifier')
console.log(breakCamelCase(''), '')
