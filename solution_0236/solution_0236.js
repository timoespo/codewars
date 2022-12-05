// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  let words = str.split(' ')
  for (let i = 0; i < words.length; i++) {
    if (words[i].match(/^[A-Za-z]+$/)) {
      words[i] = words[i].substring(1) + words[i].charAt(0) + 'ay'
    }
  }
  return words.join(' ')
}

console.log(pigIt('Pig Latin is cool'), 'igPay atinLay siay oolcay')
