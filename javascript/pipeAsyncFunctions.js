// Given a array of async functions call
// Call each functions one after another and pass the result of previous function to next function.

// Implement own reduce function
function reduce(arr, callback, previousValue){
  let count = 0,
  	total = previousValue;
  while(count < arr.length) {
  
    if(typeof total === 'undefined') {
      total = callback(arr[count], arr[++count]);
    } else {
      console.log(total, arr[count]);
      total = callback(total, arr[count]);
    }
    
    count++;
  }
  return total;
  
}

//Pipe with own reduce function
const Pipe = (funs) => arg => reduce(funs, (prevFunction, currentFunction) => prevFunction.then(currentFunction), Promise.resolve(arg));


const pipeFunction = Pipe([
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4]
);

console.log('-----------> ', pipeFunction(5).then( result => console.log("result with reduce ---->", result)));
