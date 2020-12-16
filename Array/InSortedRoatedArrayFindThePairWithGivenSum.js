
//Given a sorted and rotated array, find if there is a pair with a given sum
// Input: arr[] = {11, 15, 6, 8, 9, 10}, x = 16
// Output: true
// There is a pair (6, 10) with sum 16

// Input: arr[] = {11, 15, 26, 38, 9, 10}, x = 35
// Output: true
// There is a pair (26, 9) with sum 35

// Input: arr[] = {11, 15, 26, 38, 9, 10}, x = 45
// Output: false
// There is no pair with sum 45.

//Time complexity O(n)
function find(a, sum) {
  let n = a.length;
  //find the pivot point in the array.
  for(var i= 0; i < a.length-1; i++){
    if(a[i] > a[i+1]){
      break;
    }
  }
  
  //Once yopu find the pivot element you can continue with the approch of sorted array with cyclic rotation increment and decremental of l and h;
  let h = i,
      l = (n+i+1) % n;
  if (!sum) {
    return -1;
  }
  while(l !== h) {
    var currentSum = a[l]+a[h];
    if(currentSum === sum){
      return [l,h];
    }
    if(currentSum < sum) {
      l = (l+1) % n;
    } else
    if(currentSum > sum) {
      h = (h-1+n) % n;
     
    }
  }
  
  return "Not Found";
}
console.log(find([11, 15, 26, 38, 9, 10], 26));
