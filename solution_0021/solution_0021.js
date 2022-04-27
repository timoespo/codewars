//Build a function that returns an array of integers from n to 1 where n > 0.
function reverseSeq(n) {
    let arr = []
    for (let i = n ; i > 0 ; i--){
        arr.push(i)
    } return arr
}

//test cases 
reverseSeq(5) // [5,4,3,2,1]
