//Flatten an array with unknown depth (reimplement .flat(Infinity)).
//a. Write it both recursively and iteratively.

function flat(a, result=[]){
    if(typeof a === "object"){
        for(var i=0; i<= a.length-1; i++){
            flat(a[i], result);
        }
    } else {
        result.push(a);
    }
    return result;
}

var arr = [1, 2, [3, 4, [5, 6]]];

flat(arr);
//[1, 2, 3, 4, 5, 6]
