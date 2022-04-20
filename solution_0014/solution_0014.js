//April 14th: Convert a string into a number
function stringToNumber(str) {
    let num = Number(str) 
    return num;
}

//using parseInt
function parseStringToNumber(str){
    let num = parseInt(str)
    return num
}

//test cases 
stringToNumber("1234")// 1234
stringToNumber("605")//605

//Other solutions contained parseInt 

//tests for parseInt
parseStringToNumber("2018@alsdja") //2018
