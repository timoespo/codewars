//The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
function cockroachSpeed(s) {
    return Math.floor(s * 27.777778)
}

//test cases 
cockroachSpeed(1.08) // 30