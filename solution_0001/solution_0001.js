//In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?</p>

function makeNegative(num) {
    return (num > 0) ? -Math.abs(num) : num
}
//test cases
makeNegative(42)
makeNegative(-42)