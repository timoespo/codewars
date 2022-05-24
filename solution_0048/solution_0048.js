//If you can't sleep, just count sheep!!
let countSheep = function(num) {
    let result = '';
    for (let i = 1; i <= num ; i++) {
        result = result + i + ' sheep...'
    }
    return result
}

//tests
countSheep(3)// 1 sheep...2 sheep...3 sheep...