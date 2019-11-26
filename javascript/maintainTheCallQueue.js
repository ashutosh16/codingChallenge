{
    // Q1 : Design an API that takes function & executes them only 
    //      when the previous function call in the queue has executed.
    //      How will you know that the previous function has executed?
    // Q2 : How do you make a function that takes f and returns a function that calls f on a timeout? 

    function CreateSyncfunc(fun) {
        let callback = fun;
        let queue = [];
        let isInprogress = 0;
        let callCallback = (param) => {
            return Promise.all([callback(...param)]);
        }
        let mainFunc = (...args) => {
            return new Promise((resolve) => {
                if(isInprogress) {
                    queue.push(args);
                } else {
                    isInprogress = 1;
                    callCallback(args).then((res) => {
                        debugger;
                        isInprogress = 0;
                        resolve(res);
                        if(queue.length > 0) {
                            return mainFunc(...queue.shift());
                        }
                    });
                }
            });
        }

        return mainFunc;
    }
   
    var f1 = (time) => {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                console.log("DONE : ", time);
              resolve('foo');
            }, time);
        });
    }
    
    var fun = CreateSyncfunc(f1);

    fun(5000).then(res => {
        console.log("res 5000 = ", res);
    });
    fun(1000).then(res => {
        console.log("res 5000 = ", res);
    });;
}
