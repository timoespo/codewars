//Square(n) Sum
function squareSum(numbers){
    let total = 0
    for (let i = 0 ; i < numbers.length ; i++) {
        total += Math.pow(numbers[i], 2)
    } return total
}
//test cases
squareSum([1,2]) // 5
console.log(squareSum([0,3,4,5]))// 50