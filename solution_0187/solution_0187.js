// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract this from the total of the string integers.

// Return as a number.

function divCon(x) {
  let totalNums = 0
  let totalStr = 0
  for (const e of x) {
    if (typeof e === 'number') {
      totalNums += e
    } else if (typeof e === 'string') {
      totalStr += parseInt(e)
    }
  }
  return totalNums - totalStr
}

console.log(divCon([9, 3, '7', '3']), 2)
