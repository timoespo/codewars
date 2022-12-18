// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

function queueTime(customer, n) {
  let tills = new Array(n).fill(0)
  for (let i = 0; i < customer.length; i++) {
    let shortestTimeIndex = tills.indexOf(Math.min(...tills))
    tills[shortestTimeIndex] += customer[i]
  }
  return Math.max(...tills)
}

console.log(queueTime([5, 3, 4], 1), 12)
console.log(queueTime([10, 2, 3, 3], 2), 10)
console.log(queueTime([2, 3, 10], 2), 12)
