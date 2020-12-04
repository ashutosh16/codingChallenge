{
    // How do you make a function that only calls input function f every 50 milliseconds?  

    function debounce(fun, time) {
        let timeout = null;
        
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => fun(...args), time);
        }
    }
    
    const debounceFunction = debounce(
        (a) => console.log('hi-',a),
        3000
    );

    debounceFunction(1);
    debounceFunction(2);
    debounceFunction(3);
    
    //Output
    //hi-3
    
}
