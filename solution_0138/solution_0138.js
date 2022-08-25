// Scenario
// Several people are standing in a row divided into two teams.
// The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

// Task
// Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

function rowWeights(array) {
  let team1 = array
    .filter((x, i) => i % 2 == 0)
    .reduce((a, item) => a + item, 0)

  let team2 = array
    .filter((x, i) => i % 2 !== 0)
    .reduce((a, item) => a + item, 0)

  return [team1, team2]
}

console.log(rowWeights([29, 83, 67, 53, 19, 28, 96]), [211, 164])
console.log(rowWeights([39, 84, 74, 18, 59, 72, 35, 61]), [207, 235])
