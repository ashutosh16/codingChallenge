{
    // How do you make a function that only calls input function f every 50 milliseconds?  

    function debounce(fun, time) {
        let timeout = null;
        
        return (...args) => {
            let callLater = () => {
                timeout = null;
                fun(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(fun, time);
        }
    }

}
