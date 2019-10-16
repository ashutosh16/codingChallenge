// Write a function which take two arguments,
// return the 2 elemens from array 'a',
// whose sum is equal to second parameter of function.
// @function find
// @param {Array} 'a' array of numbers
// @param {Number} 'sum' number 
// @returns {Array} array of two number
// Time complexity of this function is O(n)
// Space complexity of this function is O(n) 
function find(a, sum) {
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
let A = [1,4,7,2,15,67];
let sum = 17;
find(A, sum);
// expected output: [15,2] or [2,15]


//Time Complexity O(n log(n)) & space complexity is O(1)
// Sort the array
