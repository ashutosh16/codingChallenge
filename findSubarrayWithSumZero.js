// Time complexity O(n)
/**
 * @param {Array} arr given array
 */
function subArrayWithSumZero(arr) {
  let map = {},
    sum = 0,
    subArray = [];
  for(let i=0; i < arr.length; i++) {
    sum += arr[i];
    if (!map[sum]) {
      map[sum] = i+1;
    } else {
      subArray.push(arr.slice(map[sum], i+1));
    }
  }
  return subArray;
}

let result = subArrayWithSumZero([1,4,-7,3,1,3,1,-4,-2,-2]);
console.log(result);
// [[4, -7, 3], [-7, 3, 1, 3], [3, 1, -4],[3, 1, 3, 1, -4, -2, -2]]