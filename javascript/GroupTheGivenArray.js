// Creates an array of elements, grouped based on the position in the original arrays and 
// using function as the last value to specify how grouped values should be combined.

// GroupWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
// [111,222]

function GroupWith(...args){
  let groupfunction = args.pop();
  let resultLength = args[0].length;
  let result = [];
  
  for(let i=0; i <= resultLength-1; i++){
    let argumentList = [];
    args.forEach((arr => argumentList.push(arr[i])));
    result.push(groupFunction(...argumentList));
  }
  return result;
}

GroupWith([1, 2], [10, 20], [100, 200], (a, b, c) => a + b + c);
//[111, 222]
