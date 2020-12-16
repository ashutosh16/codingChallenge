// Print Left rotation of array at given point 
// Hint: When we rotate the array. StartIndex will alway be equal to nextIndex after few roations.
// Case 1: Even length array -> startIndex === nextIndex (may or may not be completing array rotation).
// Case 2: Odd lenmgth array -> startIndex === nextIndex (after complete array rotation)
// Hence keep the count on outer for loop


function LeftRotation (arr, r) {
  let count = 0;
  let n = arr.length;
  
  for( let startIndex = 0; count < n; startIndex++) {
    let nextIndex = startIndex;
    let prevElement = arr[startIndex];
    //Need do while because we dont want to stop swapping on startIndex === nextIndex, we want to swap this case and then stop.
    do { 
      nextIndex = (nextIndex - r + n) % n;
      [arr[nextIndex] , prevElement] = [prevElement, arr[nextIndex]];
      count ++;
    } while(startIndex !== nextIndex) //  // as complete rotation or repeatition both will have startIndex === nextIndex
}


LeftRotation([1,2,3,4,5,6], 3);

// [4, 5, 6, 1, 2, 3]

	[0,1,2,3]
