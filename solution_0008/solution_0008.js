//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let minInteger = Math.min(...args) //first time using the spread operator
        return minInteger   
    }
}

//test cases 
findSmallestInt([78,56,232,12,8]) // 8
findSmallestInt([1,56,232,12,8]) // 1
