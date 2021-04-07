// Throttling in Javascript
// Block the function to maintain given time limit between 2 calls.

// <button class="refresh"> Refresh List </button> 

function Throtteling(fun, limit){
    let isWait = false;
    return (...args)=>{
        if(isWait) return;
        fun(args);
        isWait = true;
        setTimeout(()=>{ isWait = false; }, limit)
    }
}

const clickEv = Throtteling(() => console.log("Clicked!!!"), 2000);

document.querySelector(".refresh").addEventListener("click", clickEv);

// Debounce function 
// function call is delay to given time if it gets call again in that time the cansel prev call and place new call to run after given time.
function Debounce(fun, time) {
    let timer = null;
    return (...args) =>{
        if(timer !== null) {
            clearTimeout(timer);
            timer = null;
        }
        timer = setTimeout(()=>{
            fun(args);
            timer = null;
        }, time);
    }
}

var a = Debounce(()=>console.log("Done!"), 3000);
a();
a();
// Done!
