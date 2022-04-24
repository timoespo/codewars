//You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
function check(a, x) {
    return a.includes(x) ? true : false
}

//test cases 
check([66,101,42], 42) // true
check([a, b, c, d] , e)// false