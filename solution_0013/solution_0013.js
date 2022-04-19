//Convert number to reversed array of digits - Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    let arrayOfDigits = Array.from(String(n), Number)
    let reverseArray = arrayOfDigits.reverse()
    return reverseArray
}

//test cases
digitize(35231) // [1,3,2,5,3]

