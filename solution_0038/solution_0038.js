//Isograms - An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str) {
    return str.toLowerCase().split('').filter((item, pos, arr) => arr.indexOf(item)== pos).length == str.length
}

//Other solution 1: 
function isIsogram(str) {
    return new Set(str.toUpperCase().size == str.length) //uses the Set object
}

//Other solution 2
function isIsogram(str) {
    let i, j;
    str = str.toLowerCase()
    for (let i = 0 ; i < str.length ; i++) {
        for(let j = 0 ; j < str.length ; j++) 
        if (str[i] === str[j]) {
            return false
        }
        
    }return true 
}


//test cases 
isIsogram('Dermaglyphics') // true
isIsogram('isogram') // true
isIsogram('isIsogram')// false
