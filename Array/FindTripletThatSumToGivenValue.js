// Find a triplet that sum to a given value
// Time complexity O(n^3)
function findAllTriplet(a, number){
  let n = a.length - 1,
  result = [];
  for(let i = 0; i <= n-2; i++){
    for(let j = i+1; j <= n-1; j++){
      for(let k = j+1; k <= n; k++){
        if (number === (a[i] + a[j] + a[k])){
          result.push([a[i], a[j], a[k]]);
          console.log(`[${i},${j},${k}] `);
        }
      }
    }
  }
  return result;
}

findAllTriplet([12,3,4,1,6,9], 14);

/**
 * Can be solved by O(n^2), Space complexity is O(n)
 * Step 1 - for i=0 to n
 * find the dupleats from a[i+1] to a[n] such that sum of duplates is (number - a[i]) == (a[d1]+a[d2])
 * 
 */

/**
 * Can be solved by O(n^2), Space complexity is O(1)
 * Step 1 - Sort the array - O(nlog(n))
 * Step 2 - set first element for i=0 to n - 3
 * Step 3 - left = a[i+1] right = a[n-1] while (left < right) left++ & right--;
 * 
 */

function findSumTriplet(arr, sum) {
  arr = arr.sort((a,b) => a-b);
  let result = [];
  for (let i = 0; i < arr.length - 3; i++) {
    let map = {};
    let requiredSum = sum - arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (map[String(arr[j])]) {
        result.push([arr[i], map[String(arr[j])], arr[j]]);
      } else {
        map[requiredSum - arr[j]] = arr[j];
      }
    }
  }
  return result.length > 0 ? result : null;
}

findSumTriplet([12,3,4,1,6,9], 14);
