// backtracking sum of subsets
// Find is subset of the arr is present in given arr with given sum.


//Time complexity is O(2^n)

function isSubsetPresent(arr, sum, n = arr.length-1) {
  if(sum === 0) return true;
  if(n === -1) return false;
  
  if(arr[n] > sum) return isSubsetPresent(arr, sum, n-1);
  
  return (
    isSubsetPresent(arr, sum, n-1) ||
    isSubsetPresent(arr, sum - arr[n], n-1)
  );
}

isSubsetPresent([3, 34, 4, 12, 5, 2], 38);


// With memorization 
function isSubsetPresent(arr, sum, n = arr.length-1, map = {}) {
  if(sum === 0) return true;
  if(n === -1) return false;
  if(typeof map[`${sum}-${n}`] !== 'undefined') return map[`${sum}-${n}`]; // return if result was already calculated
  
  let result = false;
  
  if(arr[n] > sum) result = isSubsetPresent(arr, sum, n-1, map);
  
  result = (
    isSubsetPresent(arr, sum, n-1, map) ||
    isSubsetPresent(arr, sum - arr[n], n-1, map)
  );
  
  return map[`${sum}-${n}`] = result; // memorizing the calculated result.
}
isSubsetPresent([3, 34, 4, 12, 5, 2], 38);

