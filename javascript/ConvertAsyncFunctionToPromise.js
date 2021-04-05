/**
  * Given a function which take the parameters and callback after task is done.
  * Convert this function to new function which return the Promise insted of callback.
  * Here delay is the function which is implemented to use callback.
  * Create function which takes delay function and return the new function which work on delay but in Promise pattern.
  * So user not need to provide the callback instead he will use .then to resolve the promise once task is done.
*/

let delay = (sec, callback) => setTimeout(()=>callback(false, "Done successfully!!"), sec);

function Promisify (fun) {
  return (...arg) => new Promise((resolve, reject) => fun(...arg, (error, result) => error ? reject(error) : resolve(result)));
}

let delayPromise = Promisify(delay);

delayPromise(3000).then(result => console.log(result));
