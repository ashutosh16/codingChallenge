/**
 * Find maximum length sub-array having equal number of 0’s and 1’s
 */

//  find sum of sub array considering 0 as -1 and 1 as 1. if sum repeat then its equal number of zero and 1.
//input {0,0,1,0,1,0,0}
//output {0,1,0,1} {1,0,1,0}


{
  function SubArrayWithEqualNumbersOfOneAndZero(a, n) {
    let subArray = [],
      sum = 0,
      map = {};

    for (let i = 0; i < a.length; i++) {
      (a[i] === 0) ? (sum += -1) : (sum += 1);
      if (sum === 0) {
        subArray.push(a.slice(0, i + 1));
      } else
        if (typeof map[sum] !== 'undefined') {
          subArray.push(a.slice(map[sum], i + 1));
        } else {
          map[sum] = i + 1;
        }
    }
    return subArray;
  }

  let result = SubArrayWithEqualNumbersOfOneAndZero([0, 0, 1, 0, 1, 0, 0]);
  console.log(result);

  // [0, 1]
  // [1, 0]
  // [0, 1, 0, 1]
  // [1, 0, 1, 0]
}

