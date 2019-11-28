{ 
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
      } else {//Got the subArray with Sum zero
        subArray.push(arr.slice(map[sum], i+1));
      }
    }
    return subArray;
  }

  let result = subArrayWithSumZero([1,4,-7,3,1,3,1,-4,-2,-2]);
  console.log(result);
  // [[4, -7, 3], [-7, 3, 1, 3], [3, 1, -4],[3, 1, 3, 1, -4, -2, -2]]
  // Hint: 
  // |<----- Sum = X ------->|
  // i                       j                  k
  // |<-------- Sum = X ----------------------->|
  // That Means              |<--- Sum = 0  --->|
  // Sum from index j to k sub array must be 0;
  
}

{
  function SubArrayWithGivenSum(a, n) {
    let subArray=[],
      sum=0,
      map={};

      for(let i=0; i < a.length; i++) {
        sum+= a[i];
        if(sum === n){
          subArray.push(a.slice(0, i+1));
        } else 
          if (sum > n && typeof map[sum-n] !== 'undefined') {
            subArray.push(a.slice(map[sum - n], i+1));
          } else 
            if (!map[sum]) {
              map[sum] = i+1;
            }
      }
      return subArray;
  }

  let result = SubArrayWithGivenSum([5,6,-5,5,3,5,3,-2,0], 8);
  console.log(result);
  // [5, 3]
  // [-5, 5, 3, 5]
}

{
  function SubArrayWithEqualNumbersOfOneAndZero(a, n) {
    let subArray = [],
      sum = 0,
      map = {};

    for (let i = 0; i < a.length; i++) {
      (a[i] === 0 ) ? ( sum+=-1 ) : ( sum+=1 );
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

