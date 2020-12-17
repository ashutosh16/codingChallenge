/**
  * Given the Array with result number.
  * Need to find the continous sub array whose total is equal to given result number.
  * Time complexity is O(n)
  */
function getSeq(a, resultSum) {
  var sum = 0,
    i = 0,
    j = 0;
  sum = sum + a[j];

  while(j < a.length) {
    if(sum === resultSum){
      //result array is from i to j
      return a.slice(i,j+1);
    } else 
    if(sum < resultSum) {
      j++;
      sum = sum + a[j];
    } else {
      //sum > totalSum
      sum = sum - a[i];
      i++;
    }
  }
  return 'not found';

}

getSeq([2,3,4,5,7,2,3], 14);

getSeq([-2, 5, 5, -4],4); // failed with not found

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

  let result = SubArrayWithGivenSum([ -2, 5, 5, -4, 7, 6], 4);
  console.log(result);
  // [-2, 5, 5, -4]
}
