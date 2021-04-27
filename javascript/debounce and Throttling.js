// https://www.youtube.com/watch?v=tJhA0DrH5co&list=PLlasXeu85E9eV5xUEgrWUB8NAUvNZGsK0&index=12
{
    // How do you make a function that only calls input function f every 50 milliseconds?  
//     Use case : In search bar.

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


{
    // Throttling in Javascript
    // Block the function to maintain given time limit between 2 calls.
//     Use case: 
//     1. Window resize event
//     2. Clicking on send button
//     3. In Shooting game triggering the bullet from gun.

    // <button class="refresh"> Refresh List </button> 

    function Throtteling(fun, limit){
        let isWait = false;
        return (...args)=>{
            if(isWait) return;
            fun(args);
            isWait = true;
            setTimeout(()=>{ isWait = false; }, limit);
        }
    }

    const clickEv = Throtteling(() => console.log("Clicked!!!"), 2000);

    document.querySelector(".refresh").addEventListener("click", clickEv);

}
