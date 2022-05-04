//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    let newStr = s.replace(/!/g, '')
    return newStr
 }

//test cases 
RemoveExclamationMarks("Hello World!") // Hello World
