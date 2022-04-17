//April 6th: In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

function makeNegative(num) {
    return (num > 0) ? -Math.abs(num) : num
}
//test cases
makeNegative(42)
makeNegative(-42)


// April 6th: Very simple, given an integer or a floating-point number, find its opposite.
function opposite(number) {
    return (number > 0) ? -Math.abs(number) : Math.abs(number)
}
//test cases 
opposite(1)
opposite(-1)  

//April 7th: We need a function that can transform a number into a string.
function numberToString(num) {
    return num.toString()
}
//test cases
numberToString(67)

//April 7th: Complete the solution so that it reverses the string passed into it.
function solution(str) {
    let o = ''
    for (let i = str.length -1; i>= 0; i--)
        o += str[i]
    return o

//Solution I need to remember!
function solution(str){
    return str.split('').reverse().join('')
}

}
//test cases
solution("world")
solution("hello")


//April 8th: Simple, remove the spaces from the string, then return the resultant string.
function noSpace(x) {
    return x.split(' ').join('')
}
//test cases
noSpace('8 j 8 mBliB9 g imJ Bbb99 B')
noSpace('aa bbbb cccccc ddddd')


//April 8th: Grasshopper Summation - Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

var summation = function(num) {
    sum = 0
    for (let i = 0 ; i <= num ; i++) {
        sum += i
    } return sum
}

//test cases 
summation(8) //36


//April 8th: Square(n) Sum
function squareSum(numbers){
    let total = 0
    for (let i = 0 ; i < numbers.length ; i++) {
        total += Math.pow(numbers[i], 2)
    } return total
}
//test cases
squareSum([1,2]) // 5
squareSum([0,3,4,5])// 50


//April 12th: Given an array of integers your solution should find the smallest integer.
class SmallestIntegerFinder {
    findSmallestInt(args) {
        let minInteger = Math.min(...args) //first time using the spread operator
        return minInteger   
    }
}

//test cases 
findSmallestInt([78,56,232,12,8]) // 8
findSmallestInt([1,56,232,12,8]) // 1


//April 12th: Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
function countSheeps(arrayOfSheep) {
    let totalSheep = 0
    for (let i = 0 ; i < arrayOfSheep.length ; i++) {
        if (arrayOfSheep[i] === true) {
            totalSheep++
        }
    } return totalSheep
}

//test cases
let array1 = [true, true, true, false, true, true, true, true, false, true, false, true]
countSheeps(array1) // 9 Sheeps in total

//Solution I thought was clever on Codewars
function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;   // first time seeing the filter method being used on Boolean
  }


//April 13th: Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.
function isDivisible(n,x,y){
    if(n % x === 0 && n % y === 0) {
        return true 
    } else {
        return false
    }
}

//test cases
isDivisible(3,3,4) // false
isDivisible(12,3,4) // true
isDivisible(8,3,4) // false


//April 13th: Century from Year: The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
function century(year) {
    return Math.ceil(year/100) //using Math.ceil will round up
}

//test cases
century(1705) // 18
century(1900) // 19
century(1601) //17

//April 13th: Abbreviate a two name word - Write a function to convert a name into initials. This kata strictly takes two words with one space in between them. The output should be two capital letters with a dot separating them.
function abbrevName(name) {
    let x = name.split(" ")[1]
    let y = name.substring(name.indexOf(" ")+ 1)
    return `${x[0]}.${y[0]}`
}

//test cases
abbrevName("Sam Harris") // "S.H"
abbrevName("Patrick Feenan") //"P.F"
abbrevName("Evan Cole") // "E.C"


//April 13th: Convert number to reversed array of digits - Given a random non-negative number, you have to return the digits of this number within an array in reverse order.
function digitize(n) {
    let arrayOfDigits = Array.from(String(n), Number)
    let reverseArray = arrayOfDigits.reverse()
    return reverseArray
}

//test cases
digitize(35231) // [1,3,2,5,3]


//April 14th: Convert a string into a number
function stringToNumber(str) {
    let num = Number(str) 
    return num;
}

//test cases 
stringToNumber("1234")// 1234
stringToNumber("605")//605

//Looking at other solutions, using parseInt is much better way to solve this

//April 14th: Given an array of integers, return a new array with each value doubled.
function maps(x) {
    return treasureMap = x.map( n => n * 2)
}

//test cases
maps([1,2,3,4])
maps([2.4,6,8])


//April 14th: Clock shows h hours, m minutes and s seconds after midnight. Your task is to write a function which returns the time since midnight in milliseconds.
function past( h, m, s) {
    let ms = (h * 3600 * 1000) + (m * 60 * 1000) + (s * 1000)
    return ms
}

//test cases 
past(0, 1, 1) // 61000
past(1, 1, 1) // 3661000

//April 15th: Needle in a haystack - write a function that finds 'needle' in an array
function findNeedle(haystack) {
    for (let i = 0 ; i < haystack.length ; i++) {
        if (haystack[i] === 'needle') {
            return `found the needle at position ${i}`
        }
    }
}


//April 16th: You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.
function check(a, x) {
    return a.includes(x) ? true : false
}

//test cases 
check([66,101,42], 42) // true
check([a, b, c, d] , e)// false

//April 16th: Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.
function greet(name) {
    return (name === 'Johnny') ? 'Hello, my love!' : `Hello, ${name}!`
}

//test cases 
greet('Johnny') // 'Hello, my love!
greet('Jimmy')// 'Hello, Jimmy!

//April 16th: It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script. Return the average of the given array rounded down to its nearest integer.
function getAverage(marks) {
    let total = 0
    for (let i = 0 ; i < marks.length ; i++) {
     total += marks[i]   
    } return Math.floor(total / marks.length)
}

//test cases
getAverage([2,2,2,2]) // 2
getAverage([1,2,3,4,5]) // 3

//April 16th: Build a function that returns an array of integers from n to 1 where n>0.
function reverseSeq(n) {
    let arr = []
    for (let i = n ; i > 0 ; i--){
        arr.push(i)
    } return arr
}

//test cases 
reverseSeq(5) // [5,4,3,2,1]

//April 16th: Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages. Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.
function paperwork(n ,m) {
    return (n < 0 || m < 0 ) ? 0 : n * m
}
// test cases 
paperwork(5,5) // 25
paperwork(-5,5) //0 

//April 17th: Sum two arrays 
function arrayPlusArray(arr1, arr2) {
    let total = 0
    for (let i = 0 ; i < arr1.length ; i++) {
        total += arr1[i] + arr2[i]
    }
    return total;
}

//April 17th: A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?
function hero(bullets, dragons) {
    return (bullets / dragons >= 2) ? true : false
}

//test cases
hero(10, 5) // true
hero(7, 4) // false

//April 17th: This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.
function simpleMultiplication(number) {
    return (number%2 === 0) ? number * 8 : number * 9
}

simpleMultiplication(2) // 16
simpleMultiplication(1) //9 