function Promisify (fun) {

  return (...arg) => new Promise((resolve, reject) => fun(...arg, (error, result) => error ? reject(error) : resolve(result)));

}


let delay = (sec, callback) => setTimeout(callback, sec);

let delayPromise = Promisify(delay);

delayPromise(3000).then(result => console.log("Hi "));
