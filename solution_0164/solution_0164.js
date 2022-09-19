// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

var greet = function (name) {
  return `Hello ${name.charAt(0).toUpperCase()}${name.toLowerCase().slice(1)}!`
}

console.log(greet('molly'), 'Hello Molly!')
