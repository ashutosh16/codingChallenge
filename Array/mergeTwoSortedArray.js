function merge(a1, a2) {
  let i =0,
    j = 0,
    n = a1.length;

  while(i < n || a2.length > 0) {
    if(a1[i] <= a2[0]) {
      i++;
    } else {
      let temp = a2.shift();
      a1.splice(i, 0, temp);
      i++;
    }
  }

  if(i > n) {
    while(a2.length > 0){
      a1.push(a2.shift());
    }
  }
  console.log(a1);
  return a1;
}

merge([1,5,10], [2,8,15]);