//Flatten an array with unknown depth (reimplement .flat(Infinity)).
//a. Write it both recursively and iteratively.

function Flat(data, result=[]){
    (Array.isArray(data))
        ? data.map((item)=> Flat(item, result))
        : result.push(data);
    return result;
    
}

var arr = [1, 2, [3, 4, [5, 6]]];

flat(arr);
//[1, 2, 3, 4, 5, 6]

