// For a given string s find the character c (or C) with longest consecutive repetition and return:

// [c, l]
// where l (or L) is the length of the repetition. If there are two or more characters with the same l return the first in order of appearance.

// For empty string return:

// ["", 0]

function longestRepitition(s) {
  let str = ''
  let count = 1
  let arr = []

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      count++
    } else {
      if (arr.every((v) => v < count)) {
        str = s[i] + count
      }
      arr.push(count)
      count = 1
    }
  }
  return !str ? ['', 0] : [str.slice(0, 1), str.slice(1) * 1]
}

console.log(longestRepitition('aaaabb'), ['a', 4])
