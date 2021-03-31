// Write a code for this function: sum(a)(b)(c)....( n)(). This should return the sum of a+b+c....+n. 
// If User call the function without any parameter then return the calculated sum

function Sum(a) {
  if(typeof a === "undefined") return null;
  return (b) => (typeof b === "undefined") ? a : Sum(a+b); 
}


function sum(a){
  if(a) {
    return (b) => {
        if(b) return sum(a+b);
        return a;
      };
  } 
}

Sum(1)(2)(3)();
// 6



