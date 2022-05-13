//Check if a number is a perfect square
var isSquare = function(n) {
    return n > -1 && Math.sqrt(n) % 1 === 0; 
}

//test cases 
isSquare(-1) //false 
isSquare(25) // true
isSquare(3) //false