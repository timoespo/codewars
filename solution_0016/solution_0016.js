//Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.
function past( h, m, s) {
    let ms = (h * 3600 * 1000) + (m * 60 * 1000) + (s * 1000)
    return ms
}

//test cases 
past(0, 1, 1) // 61000
past(1, 1, 1) // 3661000