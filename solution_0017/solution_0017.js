// Needle in a haystack - write a function that finds 'needle' in an array
function findNeedle(haystack) {
    for (let i = 0 ; i < haystack.length ; i++) {
        if (haystack[i] === 'needle') {
            return `found the needle at position ${i}`
        }
    }
}

//test 
findNeedle(['hay', 'needle', 'stack', 'need']) //1