//Abbreviate a two name word - Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.
function abbrevName(name) {
    let x = name.split(" ")[1]
    let y = name.substring(name.indexOf(" ")+ 1)
    return `${x[0]}.${y[0]}`
}

//test cases
abbrevName("Sam Harris") // "S.H"
abbrevName("Patrick Feenan") //"P.F"
abbrevName("Evan Cole") // "E.C"
