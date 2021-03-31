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
// HINT:  prevFunction.then(currentFunction) retunn the promise with value return by the currentFunction.
// Promise.resolve(arg) return the success promise.

const Pipe = (funs) => arg => reduce(funs, (prevFunction, currentFunction) => prevFunction.then(currentFunction), Promise.resolve(arg));

//Pipe with Array reduce method.
const Pipe2 = (funsArr) => arg => funsArr.reduce((prevFunction, currentFunction) => prevFunction.then(currentFunction), Promise.resolve(arg));


const pipeFunction = Pipe([
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4]
);

console.log('custom reduce --> ', pipeFunction(5).then( result => console.log("result with reduce ---->", result)));

// pipeFunction(5) This line will return output as follows.
// Promise.resolve(5)
//   .then( x => x + 1)
//   .then(x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)))
//   .then(x => x + 3)
//   .then(async x => (await x) + 4);
//

const pipeFunction2 = Pipe2([
  x => x + 1,
  x => new Promise(resolve => setTimeout(() => resolve(x + 2), 1000)),
  x => x + 3,
  async x => (await x) + 4]
);

console.log('Array reduce --> ', pipeFunction2(5).then( result => console.log("result with reduce ---->", result)));

