
//Search an element in a sorted and rotated array
// Time Complexity O(n Log(n))

function search(a, key, l =0, h=a.length-1){
  let mid = Math.floor((l+h)/2);
  if(a[mid] === key){
    return mid;
  } else if(l >= h) { 
    return "not Found";
  }
  //We can only confirn that element is present or not in sorted part of the array by looking the low and hight of sorted part.
  
  // If Left array is sorted
  if(a[l] < a[mid]) {
    //If key present in left array
    if(key < a[mid] && key >= a[l]){
      return search(a, key, l, mid-1);
    } else {
      //Key must be present in right array.
      return search(a, key, mid+1, h);
    }
  }
  else
  // As Left array is not sorted, Right array is sorted.
  if(key <= a[h] && key > a[mid]) {
    //If key present in right array
    return search(a, key, mid+1, h);
  } else {
    //Key must be present in left array
    return search(a, key, l, mid-1);
  }
}

console.log(search([5, 6, 7, 8, 9, 10, 1, 2, 3], 3));
