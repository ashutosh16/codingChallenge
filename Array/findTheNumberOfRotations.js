
// Find the Rotation Count in Rotated Sorted array
// Consider an array of distinct numbers sorted in increasing order.
// The array has been rotated (clockwise) k number of times.
// Given such an array, find the value of k.

// Input : arr[] = {15, 18, 2, 3, 6, 12}
// Output: 2
// Explanation : Initial array must be {2, 3,
// 6, 12, 15, 18}. We get the given array after 
// rotating the initial array twice.

// Input : arr[] = {7, 9, 11, 12, 5}
// Output: 4

// Input: arr[] = {7, 9, 11, 12, 15};
// Output: 0

function findRotation(a, l=0, h=a.length-1) {
  if(a[l] < a[h]) { //Array from l to h is sorted hence rotation poin will be l.
    return l;
  }
  
  var mid = Math.floor((h-l) / 2);
  if(a[mid] < a[mid-1]) {
    return mid;
  }
  if(a[mid] > a[mid+1]) {
    return mid+1;
  }
  
  if(a[l] <= a[mid]) { // Left array is sorted hence pivot point must be in right array
    return findRotation(a,mid+1,h);
  } else {  // Right array is sorted hence pivot point must be in left array
    return findRotation(a, l, mid-1);
  }
}

findRotation([15, 18, 2, 3, 6, 12]);
findRotation([7, 9, 11, 12, 5]);
findRotation([7, 9, 11, 12, 15]);
