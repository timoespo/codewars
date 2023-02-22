// Task
// You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

// Input:

// If, you can read?

// Output:

// India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

function to_nato(words) {
  return words
    .replace(/\s/g, '')
    .toLowerCase()
    .split('')
    .map((e) => (NATO[e] ? NATO[e] : e))
    .join(' ')
}
