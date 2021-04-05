//Implement The Array reduced method from JS.

Array.prototype.myReduce = function(callback, acc) {
    let count = 0;
    if(!acc) {
        acc = this[0];
        count++;
    }
    let current = this[count];
    count++;
    while(count < this.length) {
        acc = callback(acc, this[count]);
        count++;
    }
    return acc;
}


const result = ["00", "01", "10", "11"].myReduce((acc, item)=>{ 
    acc.push(`0${item}`); acc.push(`1${item}`);
    return acc;
}, []);
// ["001", "101", "010", "110", "011", "111"]


---------------------------------------------------------------------------------------------------------------------------------------------------------
var numbers = [175, 50, 25];

function myFunc(total, num) {
  return total - num;
}


function reduce(arr, callback, previousValue){
  let count = 0,
  	total = previousValue;
  while(count < arr.length) {
  
    if(typeof total === 'undefined') {
      total = callback(arr[count], arr[++count]);
    } else {
      total = callback(total, arr[count]);
    }
    
    count++;
  }
  return total;
  
}

console.log('Reduce ---> ', reduce(numbers, myFunc));
