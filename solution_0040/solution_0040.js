//Exes and Ohs - Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//using regex
function XO(str) {
    let x = str.match(/x/gi)
    let o = str.match(/o/gi)
    return (x && x.length) === (o && o.length)
}
//solution not using regex
const XO = str => {
    str = str.toLowerCase().split('');
    return str.filter(x => x === 'x').length === str.filter(x=> x === 'o').length
}
