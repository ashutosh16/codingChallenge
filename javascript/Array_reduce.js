//Implement The Array reduced method from JS.

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
