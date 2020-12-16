// Print Left rotation of array at given point 
function LeftRotation (arr, r) {
  let count = 0;
  let n = arr.length; 
  for( let startIndex = 0; count < n; startIndex++) {
    let nextIndex = (startIndex - r + n) % n;
    let prevElement = arr[startIndex];
    while(count < n) {
      [arr[nextIndex] , prevElement] = [prevElement, arr[nextIndex]];
      count ++;
      if(count === n || startIndex === nextIndex) break;
	nextIndex = (nextIndex - r + n) % n;
      }
      if(count === n ) break;
    }
    return arr;
}


LeftRotation([1,2,3,4,5,6], 3);

// [4, 5, 6, 1, 2, 3]
