//Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(numbers) {
    return numbers.reduce((partialSum, a) => partialSum + a, 0)
}

//test cases
sum([]) // 0
sum([1,5.2,4,0,-1]) // 9.2

