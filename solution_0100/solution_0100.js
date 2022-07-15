// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

function solution(str, ending) {
  return str.endsWith(ending)
}

console.log(solution('banana', 'ana'), true)
console.log(solution('coding', 'int'), false)
