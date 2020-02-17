//Removes elements from an array for which the given function returns false.
var a = [0,1,2,3,4,5,6];

function Remove(arr, callback){
  
  for(let i = 0; i <= arr.length-1; i++){
    if(!callback(arr[i])) {
      arr.splice(i,1);
      i--;
    }
  }
  return arr;
}

Remove(a, p => (p % 2 === 0));
console.log(a);
