// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

function removeUrlAnchor(url) {
  return url.split('#')[0]
}

console.log(removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com')
console.log(
  removeUrlAnchor('www.codewars.com/katas/?page=1'),
  'www.codewars.com/katas/?page=1'
)
