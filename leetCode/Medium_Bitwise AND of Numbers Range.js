Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.

Example 1:

Input: [5,7]
Output: 4
Example 2:

Input: [0,1]
Output: 0

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
  m = m.toString(2);
  n = n.toString(2);
  let sum = "";
  while(m && n && m!==n){
    m = m.slice(0, m.length-1);
    n = n.slice(0, n.length-1);
    sum += "0";
  }
  return Number.parseInt(m+sum, 2);
};


rangeBitwiseAnd(5,7);
//4
