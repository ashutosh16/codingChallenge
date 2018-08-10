// Write a function which take two arguments,
// return the 2 elemens from array 'a',
// whose sum is equal to second parameter of function.
// @param {Array} 'a' array of numbers
// @param {Number} 'sum' number 
function sum(a, sum) {
  let temp = {};
  for (let i = 0; i <= a.length; i++) {
    if (typeof temp[a[i]] !== 'undefined') {
      return [a[i], temp[a[i]]];
    } else
      {
        let diff = sum - a[i];
        if (temp[diff]) {
          return [a[i], temp[diff]];
        } else {
          temp[diff] = a[i];
        }
      }
  }
  return 'not found';
}