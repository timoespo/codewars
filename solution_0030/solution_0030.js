//Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}

//test cases 
reverseWords("hello world!") // world! hello
reverseWords("yoda doesn't speak like this")// this like speak doesn't yoda