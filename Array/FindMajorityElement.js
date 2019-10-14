// Find majority element in an array
// Majority element apear more than n/2 times
// (Boyer–Moore majority vote algorithm)
// This method only woprks if there is majority element present.
{
  function findMajority(a){
    let m,
     count = 0;
    for(let i = 0; i < a.length; i++){
      if(count === 0 ) {
        m = a[i];
        count = 1;
      } else 
        if(a[i] === m) {
          count++;
        } else {
          count--;
        }
    }
    return m;
  }
  let result = findMajority([2, 8, 7, 2, 2, 5, 2, 3, 1, 2, 2]);
  console.log(result);
} 
