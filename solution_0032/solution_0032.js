//Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed
function disemvowel(str) {
    let strArr = str.split('')
    for (let i = 0 ; i < str.length ; i++) {
        let char = str[i].toLowerCase()
        if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u') {
            strArr[i] = '';
        }
    } return strArr.join('');
}

//Solution using regex 
function disemvowel(str) {
    return str.replace(/[aeiou]/gi, ''); 
}
