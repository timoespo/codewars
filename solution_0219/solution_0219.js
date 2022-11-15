// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("
// Notes
// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word) {
  word = word.toLowerCase()
  let frequency = {}

  for (let i = 0; i < word.length; i++) {
    if (word[i] in frequency) {
      frequency[word[i]]++
    } else {
      frequency[word[i]] = 1
    }
  }
  let output = ''
  for (let i = 0; i < word.length; i++) {
    if (frequency[word[i]] > 1) {
      output += ')'
    } else {
      output += '('
    }
  }
  return output
}

console.log(duplicateEncode('din'), '(((')
console.log(duplicateEncode('recede'), '()()()')
