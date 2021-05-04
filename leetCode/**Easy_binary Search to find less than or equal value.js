// This is not a question but used in multiple questions.
// Binary search with recurssion
var a = [24, 29, 31, 76, 81];
function find(t,l = 0, r =4){ 
  const mid = Math.floor((l+r) / 2);
  if(a[mid] === t) return t;
  if(mid > 0 && t>=a[mid-1] && t < a[mid]) return a[mid-1];

  if(t < a[mid]) return find(t, l, mid-1);
  return find(t, mid+1, r);
}
var input = [[28],[24],[29],[77],[30],[25],[76],[75],[81],[80]];

input.forEach((t)=>{
  console.log(t[0], find(t[0]));
});
  // 28 24
  // 24 24
  // 29 29
  // 77 76
  // 30 29
  // 25 24
  // 76 76
  // 75 31
  // 81 81
  // 80 76
