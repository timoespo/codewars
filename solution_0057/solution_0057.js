//Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//using arrow function 
const doubleChar = (str) => str.split("").map(c => c + c).join("");

//another solution
function doubleChar(str) {
    let word = '';
    for (let i = 0 ; i < str.length ; i++) {
        word = word + str[i] + str[i]
    };

    return word;
};


//test cases
doubleChar("abcd") // "aabbccdd"
doubleChar("Adidas") // "AAddiiddaass"
doubleChar("1337")// "11333377"
doubleChar("illuminati") // "iilllluummiinnaattii"
doubleChar("123456") // "112233445566"
doubleChar("%^&*(") //"%%^^&&**(("