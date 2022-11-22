// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

function unique_in_order(sequence) {
  let result = []
  if (typeof sequence === 'string') {
    sequence = sequence.split('')
  }
  for (let i = 0; i < sequence.length; i++) {
    if (sequence[i] !== sequence[i - 1]) {
      result.push(sequence[i])
    }
  }
  return result
}

console.log(unique_in_order('AAAABBBCCDAABBB'), ['A', 'B', 'C', 'D', 'A', 'B'])
