// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.

// Examples
// "abc#d##c"      ==>  "ac"
// "abc##d######"  ==>  ""
// "#######"       ==>  ""
// ""              ==>  ""

function cleanString(s) {
  s = s.split('')
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '#') {
      s[i] = ''
      s[i - 1] = ''
      s = s.filter((v) => v !== '')
      i -= 2
    }
  }
  return s.join('')
}

console.log(
  cleanString('gfh#jds###d#dsd####dasdaskhj###dhkjs####df##s##d##'),
  'gdasda'
)
