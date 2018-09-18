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

findAllTriplet([12,3,4,1,6,9]);

/**
 * Can be solved by O(n^2)
 * Step 1 - for i=0 to n
 * find the dupleats from a[i+1] to a[n] such that sum of duplates is (number - a[i]) == (a[d1]+a[d2])
 *  
 */
