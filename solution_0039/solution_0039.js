//List Filtering - you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
function filterList(l) {
    l = l.filter(item => typeof item !== 'string')
    return l
}

//better solution
function filterList(l) {
    return l.filter(v => typeof v == 'number')
}


//test cases 
filterList([1,2,'a','b',3]) // [1,2,3]
filterList([1,2,'aasf',123,'b'])// [1,2,123]