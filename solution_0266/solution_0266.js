// Your task, is to create N×N multiplication table, of size provided in parameter.

// For example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// For the given example, the return value should be:

// [[1,2,3],[2,4,6],[3,6,9]]

function multiplicationTable(size) {
  let arr = []
  for (let i = 1; i <= size; i++) {
    let tempArr = []
    for (let j = 1; j <= size; j++) {
      tempArr.push(i * j)
    }
    arr.push(tempArr)
  }
  return arr
}

console.log(multiplicationTable(3))
