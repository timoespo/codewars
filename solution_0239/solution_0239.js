// Your task is to construct a building which will be a pile of n cubes.
// Examples:
// findNb(1071225) --> 45

// findNb(91716553919377) --> -1

function findNb(m) {
  let n = 1
  let volume = 0
  while (volume < m) {
    volume += Math.pow(n, 3)
    if (volume === m) {
      return n
    }
    n++
  }
  return -1
}

console.log(findNb(4183059834009), 2022)
console.log(findNb(24723578342962), -1)
console.log(findNb(135440716410000), 4824)
