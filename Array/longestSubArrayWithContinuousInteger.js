
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

// Time Complexity is O(n*n), Space Complexity O(1)
// Hint : 
// 1) Start finding sub array starting from index 0 to n-1, Then index 1 to n-1 and so on.
// 2) If in subarray keep on updating minElement and maxElement from the sub array.
//    If diff between MaxElement and MinElement is equal to length of sub array.
//    ** Then sub array has the element that can be form a sequence.
// e.g. [8, 4, 6, 5, 3] 
// Min = 3, Max = 8, lenght = 5 Hence Length = (Max - Min) Then its required sub array.

// --------------------------------------------------------------------------------------------------- //

// -----------------------------   Solution 2  ------------------------------------------------------ //
// Hint:
// 1) Sort the given array Time complexity O(n * log(n))
// 2) find sub array with a[i+1] === a[i] + 1;


