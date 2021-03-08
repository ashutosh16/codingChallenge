// Throttling in Javascript
// Block the function to maintain given time limit between 2 calls.

// <button class="refresh"> Refresh List </button> 

function Throtteling(fun, limit){
    let isWait = false;
    return (...args)=>{
        if(isWait) return;
        fun(args);
        isWait = true;
        setTimeout(()=>{ isWait = false; }, limit)const clickEv = Throtteling(() => console.log("Clicked!!!"), 2000)
    }
}

const clickEv = Throtteling(() => console.log("Clicked!!!"), 2000);

document.querySelector(".refresh").addEventListener("click", clickEv);

