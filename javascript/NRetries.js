{
    function TryToSuccess(fun, reties) {
        let attempt = 0;

        let doTry = (...args) => {
            attempt++;
            return fun(...args)
                    .catch((err) => {
                        console.log("fail ", attempt);
                        if(attempt <= reties){
                            return doTry(...args);
                        } else {
                            return Promise.reject(err);
                        }
                    });
        }

        return doTry;
    }

    function asyncFunction(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                (window.findResult === true) ? resolve("Done") : reject("fail");
            }, 2000);
        });
    }

    var cloneFunc = TryToSuccess(asyncFunction, 3);

    cloneFunc()
        .then(res => { 
            console.log("Got Success. ", res)
        })
        .catch(err => { 
            console.log("Rejected with err ", err); 
        });

    setTimeout(() => {
        window.findResult = true;
    }, 4000);
}
