//Century from Year: The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
function century(year) {
    return Math.ceil(year/100) //using Math.ceil will round up
}

//test cases
century(1705) // 18
century(1900) // 19
century(1601) //17
