//Complete the solution so that it reverses the string passed into it.
function solution(str) {
    let o = ''
    for (let i = str.length -1; i>= 0; i--)
        o += str[i]
    return o

}
//Solution I need to remember! Putting into Anki
function betterSolution(str){
    return str.split('').reverse().join('')
}


//test cases
solution("world")
solution("hello")

betterSolution("world")
betterSolution('hello')
