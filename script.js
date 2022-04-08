//April 6th: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    return (num > 0) ? -Math.abs(num) : num
}
//test cases
makeNegative(42)
makeNegative(-42)


// April 6th: Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return (number > 0) ? -Math.abs(number) : Math.abs(number)
}
//test cases 
opposite(1)
opposite(-1)  

//April 7th: We need a function that can transform a number into a string.
function numberToString(num) {
    return num.toString()
}
//test cases
numberToString(67)