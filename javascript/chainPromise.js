// TODO

// This is this how we can chain the promise.
// .then(fun) -> Then function always return the resolved promise with return value of given function.
// .catch(fun) -> Catch also always return the resolved promise with return value of given function.
// Hence we can chain then with then also then with catch
// eg.

// abc(() => new Promise(res => setTimeout( () => resolve('result'), 2000)) ).then(x => x).then(x => x);
// abc(5).then().catch().then();
