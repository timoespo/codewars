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

//April 17th: You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1. As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.
function monkeyCount(n) {
    let monkeyArr = []
    for (let i = 1 ; i <=  n ; i++) {
        monkeyArr.push(i)
    } return monkeyArr
}

//test cases 
monkeyCount(5) //[1,2,3,4,5]
monkeyCount(3) // [1,2,3]


//April 17th: Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love. Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.
function lovefunc(flower1, flower2) {
    return (flower1%2 !== flower2%2) ? true : false
}

//test cases
lovefunc(1,4) // true
lovefunc(2,2) //false


//April 17th: Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
function removeExclamationMarks(s) {
    let newStr = s.replace(/!/g, '')
    return newStr
 }

//test cases 
RemoveExclamationMarks("Hello World!") // Hello World

//April 19th: Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.
const corrections = {
    '5' : 'S',
    '0' : 'O',
    '1' : 'I',
};
const correct = string => {
    string.replace(/[501]/g, character => corrections[character])
}

// test cases
correct('L0ND0N')// "LONDON"
correct('DUBL1N') // "DUBLIN"

//April 20th: Complete the solution so that it reverses all of the words within the string passed in.
function reverseWords(str){
    return str.split(" ").reverse().join(" ");
}

//test cases 
reverseWords("hello world!") // world! hello
reverseWords("yoda doesn't speak like this")// this like speak doesn't yoda

//April 20th: n this challenge, you are asked to square every digit of a number and concatenate them.
function squareDigits(num) {
    let string = num.toString();
    let results = []
    for (let i = 0; i < string.length ; i++) {
        results[i] = string[i] ** 2
    }
    return Number(results.join(''))
}

//test cases 
squareDigits(3212) // 9414
squareDigits(2112) // 4114



//April 25th: Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat. Your task is to write a function that takes a string and return a new string with all vowels removed
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

//April 25th: In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
    numbers = number.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

// test cases
highAndLow('1 2 3 4 5')// '5 1'
highAndLow('1 2 -3 4 5') // '5 -3'


//April 25th: Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
function descendingOrder(n) {
    return parseInt(String(n).split('').sort().reverse().join(''))
}
//another solution
function descendingOrder(n) {
    return +(n + '').split('').sort(function(a,b) {return b -a }).join('')
} 

//test cases
descendingOrder(42145) // 54421
descendingOrder(145263) // 654321


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


//April 26th: You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
function getMiddle(s) {
    let position;
    let length;

    if(s.length % 2 === 1) {
        position = s.length  / 2;
        length = 1
    } else {
        position = s.length / 2 - 1
        length = 2
    }
    return s.substring(position, position + length)
}

//Another solution 
function getMiddle(s) {
    return s.substr(Math.ceil(s.length / 2- 1), s.length % 2 === 0 ? 2 : 1);
}

//test cases 
getMiddle('test') // 'es'
getMiddle('testing') // 't'


//April 26th: Check if a number is  a perfect square
var isSquare = function(n) {
    return n > -1 && Math.sqrt(n) % 1 === 0; 
}

//test cases 
isSquare(-1) //false 
isSquare(25) // true
isSquare(3) //false

//April 27th: Isograms - An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
function isIsogram(str) {
    return str.toLowerCase().split('').filter((item, pos, arr) => arr.indexOf(item)== pos).length == str.length
}

//Other solution 1: 
function isIsogram(str) {
    return new Set(str.toUpperCase().size == str.length) //uses the Set object
}

//Other solution 2
function isIsogram(str) {
    let i, j;
    str = str.toLowerCase()
    for (let i = 0 ; i < str.length ; i++) {
        for(let j = 0 ; j < str.length ; j++) 
        if (str[i] === str[j]) {
            return false
        }
        
    }return true 
}


//test cases 
isIsogram('Dermaglyphics') // true
isIsogram('isogram') // true
isIsogram('isIsogram')// false


//April 27th: List Filtering - you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.
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


//April 27th: Exes and Ohs - Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
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


//May 3rd: Shark Pontoon - Your friend invites you out to a cool floating pontoon around 1km off the beach. Among other things, the pontoon has a huge slide that drops you out right into the ocean, a small way from a set of stairs used to climb out. As you plunge out of the slide into the water, you see a shark hovering in the darkness under the pontoon... Crap! You need to work out if the shark will get to you before you can get to the pontoon. To make it easier... as you do the mental calculations in the water you either freeze when you realise you are dead, or swim when you realise you can make it!
function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
    if (dolphin) {
        sharkSpeed /= 2;
    }
    return pontoonDistance/youSpeed < sharkDistance/sharkSpeed ? 'Alive' : 'SharkBait'
}

//test cases
shark(12,50,4,8,true) //"Alive"
shark(7,55,4,16,true) //"Alive"
shark(24,0,4,8,true) //"SharkBait"


//May 3rd: Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.
function sum(numbers) {
    return numbers.reduce((partialSum, a) => partialSum + a, 0)
}

//test cases
sum([]) // 0
sum([1,5.2,4,0,-1]) // 9.2


//May 3rd: It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money? Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean. If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
function bonusTime(salary, bonus) {
    return bonus === true ? `\u00A3${salary * 10}` : `\u00A3${salary}`
}

//test cases 
bonusTime(100000, true)// £1000000


//May 3rd: You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left. Considering these factors, write a function that tells you if it is possible to get to the pump or not. 
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
    return (fuelLeft * mpg) >= distanceToPump ? true : false
}

//test cases 
zeroFuel(50,25,2) // true
zeroFuel(100,50,1) // false


//May 4th: Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
var max = function(list){
    let maximum = list[0]
    for (let i = 0; i < list.length; i++){
        if(list[i] > maximum) {
            maximum = list[i]
        }
    } return maximum
}
var min = function(list){
    let minimum = list[0]
    for (let i = 0; i < list.length; i++){
        if(list[i] < minimum) {
            minimum = list[i]
        }
    } return minimum
}

//other solution
let min = (list) => Math.min(...list);
let max = (list) => Math.max(...list);

//using sorting 
var min = function(list) {
    list.sort((a,b) => (a-b));
    return list[0]
}
var max = function(list){
    list.sort((a,b) => (b-a));
    return list[0]
}


//May 4th: Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
function sumArray(array){
    if (array == null) {
        return 0
    } else if (array.length < 2) {
        return 0
    } else {
        array = array.sort(function(a,b) {return a - b})
        let total = 0
        for(let i = 0 ; i < array.length ; i++) {
            total += array[i]
     } return total  
    } 
}


//May 6th: Our football team finished the championship. The result of each match look like "x:y". Results of all matches are recorded in the collection.
function points(games) {
    let total = 0 
    for (let i = 0 ; i < games.length ; i++) {
        if (games[i][0] > games[i][2]){
            total += 3
        } else if (games[i][0] === games[i][2]){
            total += 1
        } else {
            total += 0
        }
    } return total
}


//May 6th: If you can't sleep, just count sheep!!
let countSheep = function(num) {
    let result = '';
    for (let i = 0; i <= num ; i++) {
        result = result + i + 'sheep...'
    }
    return result
}