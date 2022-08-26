// You are given two arrays a1 and a2 of strings. Each string is composed
// with letters from a to z. Let x be any string in the first array and y be
// any string in the second array. Find max(abs(length(x) − length(y))) If a1
// and/or a2 are empty return -1.

function mxdiflg(a1, a2) {
  if (a1.length === 0 || a2.length === 0) return -1
  let l1 = a1.map((str) => str.length)
  let l2 = a2.map((str) => str.length)
  return Math.max(...l1) - Math.min(...l2), Math.max(...l2) - Math.min(...l1)
}
