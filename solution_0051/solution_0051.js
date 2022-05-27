//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers. Return your answer as a number.
function sumMix(x) {
    return x.reduce((x,y) => Number(x) + Number(y), 0)
}

//using map()ß
function sumMix(x) {
    return x.map(a => +a).reduce((a,b) => a + b);
}

//test cases 
sumMix([9,3,'7','3'])// 22
sumMix(['5','0',9,3,2,1,'9',6,7]) //42
