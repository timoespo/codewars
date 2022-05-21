//Your task is to make two functions (max and min, or maximum and minimum, etc., depending on the language) that receive a list of integers as input and return, respectively, the largest and lowest number in that list.
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
