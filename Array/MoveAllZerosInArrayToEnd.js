//Move all zeros present in the array to the end without changing the sequence of the other element in array.
// Time complexity is O(n)
{
  function moveZeroToEnd(a) {
    let n = a.length;
    let j = -1;
    for(let i=0; i < n; i++) {
      if(a[i] === 0) {
        if(j <= i) {
          j = i+1;
        }
        while( j < n && a[j] === 0) {
          j++;
        }
        if(j < n) {
          [a[i], a[j]] = [a[j], a[i]];
        } else {
          break;
        }
      }
    }

    return a;
  }
  let result = moveZeroToEnd([6,0,8,22,3,0,4,0,1]);
  console.log(result);
}
