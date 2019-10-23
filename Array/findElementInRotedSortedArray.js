
//Search an element in a sorted and rotated array
// Must be solved in O(n Log(n))

function search(a, key, l =0, h=a.length-1){
  let mid = Math.floor((l+h)/2);
  if(a[mid] === key){
    return mid;
  }
  
  //If Left array is sorted
  if(a[l] < a[mid]){
    if(key < a[mid] && key >= a[l]){
      search(a, key, l, mid-1);
    } else {
      search(a, key, mid+1, h);
    }
  }
  
  if() {
    
  }

}
