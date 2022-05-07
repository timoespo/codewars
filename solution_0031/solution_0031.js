//In this challenge, you are asked to square every digit of a number and concatenate them.
function squareDigits(num) {
    let string = num.toString();
    let results = []
    for (let i = 0; i < string.length ; i++) {
        results[i] = string[i] ** 2
    }
    return Number(results.join(''))
}

//test cases 
squareDigits(3212) // 9414
squareDigits(2112) // 4114
