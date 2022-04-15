//April 12th: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
    let totalSheep = 0
    for (let i = 0 ; i < arrayOfSheep.length ; i++) {
        if (arrayOfSheep[i] === true) {
            totalSheep++
        }
    } return totalSheep
}

//test cases
let array1 = [true, true, true, false, true, true, true, true, false, true, false, true]
countSheeps(array1) // 9 Sheeps in total

//Solution I thought was clever on Codewars
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;   // first time seeing the filter method being used on Boolean
  }

