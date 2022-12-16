// Write Number in Expanded Form
// You will be given a number and you will need to return it as a string in Expanded Form. For example:

// expandedForm(12); // Should return '10 + 2'
// expandedForm(42); // Should return '40 + 2'
// expandedForm(70304); // Should return '70000 + 300 + 4'

function expandedForm(num) {
  const numString = num.toString()
  let expandedFormString = ''

  for (let i = 0; i < numString.length; i++) {
    if (numString[i] !== '0') {
      expandedFormString += `${numString[i]}${'0'.repeat(
        numString.length - i - 1
      )} + `
    }
  }
  return expandedFormString.slice(0, -3)
}

console.log(expandedForm(12), '10 + 2')
console.log(expandedForm(42), '40 + 2')
console.log(expandedForm(70304), '7000 + 300 + 4')
