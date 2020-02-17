// Creates an array of elements, grouped based on the position in the original arrays and 
// using function as the last value to specify how grouped values should be combined.

// GroupWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
// [111,222]

function GroupWith(...args){
  let groupFunction = args.pop();
  let result = [];
  
  for(let i=0; i <= args[0].length-1; i++){
    result.push(groupFunction(...args.map(a => a[i])));
  }
  
  return result;
}

var result = GroupWith([1, 2], [10, 20], [100, 400], (a, b, c) => a + b + c);

console.log(result);
//[111, 422]
