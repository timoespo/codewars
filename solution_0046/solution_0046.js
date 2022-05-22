//Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ). The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
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

