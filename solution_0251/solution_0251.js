// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function countChars(str) {
  if (str.length === 0) {
    return {}
  }
  const charCount = {}
  for (let i = 0; i < str.length; i++) {
    const char = str[i]
    charCount[char] = charCount[char] ? charCount[char] + 1 : 1
  }
  return charCount
}

console.log(countChars('aba'), { a: 2, b: 1 })
console.log(countChars(''), {})
