// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
function stringTransformer(str) {
  return str
    .split(' ')
    .map((v) =>
      v.replace(/./gi, (v) => {
        if (v === v.toLowerCase()) return v.toUpperCase()
        if (v === v.toUpperCase()) return v.toLowerCase()
      })
    )
    .reverse()
    .join(' ')
}
