//Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise.

//using arrow function

let setAlarm = (employed , vacation) => employed && !vacation 

//using conditionals
function setAlarm(employed, vacation){
    if (employed === true && vacation === true) {
      return false
    } else if (employed === false && vacation === true) {
      return false
    } else if (employed === false && vacation === false) {
      return false
    } else if(employed=== true && vacation === false){
      return true
    } else {
        return false
    }
  
  }


  //another solution 
  function setAlarm(employed, vacation) {
    return employed && !vacation
  }

  //tests
  console.log(setAlarm(true, false))
  console.log(setAlarm(false, false))
  console.log(setAlarm(false, true))
  console.log(setAlarm(true, true))