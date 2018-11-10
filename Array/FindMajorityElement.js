// Find majority element in an array(Boyer–Moore majority vote algorithm)
// Majority element apear moret than n/2 times
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