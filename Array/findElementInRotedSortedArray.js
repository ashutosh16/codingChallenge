
//Search an element in a sorted and rotated array
// Time Complexity O(n Log(n))

function search(a, key, l =0, h=a.length-1){
  let mid = Math.floor((l+h)/2);
  if(a[mid] === key){
    return mid;
  } else if(l >= h) { 
    return "not Found";
  }
  
  // If Left array is sorted
  if(a[l] < a[mid]) {
    if(key < a[mid] && key >= a[l]){
      return search(a, key, l, mid-1);
    } else {
      return search(a, key, mid+1, h);
    }
  }
  
  // As Left array is not sorted, Right array is sorted.
  if(key <= a[h] && key > a[mid]) {
    return search(a, key, mid+1, h);
  } else {
    return search(a, key, l, mid-1);
  }
}

console.log(search([5, 6, 7, 8, 9, 10, 1, 2, 3], 3));
