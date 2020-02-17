// MapToObject([1, 2, 3], x => x*x); // { 1: 1, 2: 4, 3: 9 }


function MapToObject(arr, fun){
  return arr.reduce((acc, current) => {
    acc[current] = fun(current);
    return acc;
  }, {});
}

console.log(MapToObject([1, 2, 3], x => x*x));
//{ 1: 1, 2: 4, 3: 9 }
