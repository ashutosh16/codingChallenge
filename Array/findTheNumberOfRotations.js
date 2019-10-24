function findRotation(a, l=0, h=a.length-1) {
  if(a[l] < a[h]) {
    return l;
  }
  
  var mid = Math.floor((h-l) / 2);
  if(a[mid] < a[mid-1]) {
    returnm mid;
  }
  if(a[mid] > a[mid+1]) {
    return mid+1;
  }
  
  if(a[l] <= a[mid]) {
    return findRotation(a,mid+1,h);
  } else {
    return findRotation(a, l, mid-1);
  }
  
  
  
  
}
