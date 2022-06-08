//Your function takes two arguments:

//current father's age (years)
//current age of his son (years)
//Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).


function twiceAsOld(dadYearsOld, sonYearsOld) {
    return Math.abs(dadYearsOld - (sonYearsOld * 2));
}


//test cases 
twiceAsOld(36, 7) // 22
twiceAsOld(55, 30) // 5
twiceAsOld(42, 21) // 0
twiceAsOld(22, 1) //20
twiceAsOld(29, 0) // 29