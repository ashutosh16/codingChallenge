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
