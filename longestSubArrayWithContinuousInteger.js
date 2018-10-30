
/**
 * Given an array of distinct integers, find length of the longest subarray which contains numbers that can be arranged in a continuous sequence.
 */
/**
 * 
 * @param {}
 */

function longSubArray(a) {
  let max_length = 1,
    n = a.length;
  for(let i=0; i < n-1; i++){
    let mn = a[i],
      mx = a[i];
    for(let j = i+1; j < n; j++){
      mn = Math.min(mn, a[j]);
      mx = Math.max(mx, a[j]);

      if ((mx - mn) == (j - i)) {
        max_length = Math.max(max_length, mx - mn + 1);
      }
    }
  }
  return max_length;
}
let a = [1, 56, 58, 57, 90, 92, 94, 93, 91, 45];
let result = longSubArray(a);
console.log(result);