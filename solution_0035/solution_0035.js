//April 26th: Mumbling - This time no story, no theory. 
function accum(str)  {
    let letters = str.split('');
    let result = []
    for (let i = 0; i < letters.length ; i++) {
        result.push(letters[i].toUpperCase() + Array(i + 1).join(letters[i].toLowerCase()));
    }
    return result.join('-');
}

//test cases 
accum('abcd') // 'A-Bb-Ccc-Dddd
accum('RqaEzty') // 'R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy'