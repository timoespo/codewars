// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(string) {
  return string
    .split(' ')
    .map((e) => {
      const num = parseFloat(e) || ''
      const word = e.split(num)[1]

      if (word.length === 1) return String.fromCharCode(num) + word
      return (
        String.fromCharCode(num) +
        word.slice(-1) +
        word.slice(1, -1) +
        word.slice(0, 1)
      )
    })
    .join(' ')
}

console.log(
  decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka'),
  'A wise old owl lived in an oak'
)
