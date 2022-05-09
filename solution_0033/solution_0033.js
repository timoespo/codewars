//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
function highAndLow(numbers) {
    numbers = number.split(' ');
    return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

// test cases
highAndLow('1 2 3 4 5')// '5 1'
highAndLow('1 2 -3 4 5') // '5 -3'

