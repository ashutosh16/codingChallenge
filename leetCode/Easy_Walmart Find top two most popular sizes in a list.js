// Given a list of clothing sizes, create a function that will find top two most popular sizes in a list. 
// Walmart phone interview question.

// E.g. 
// const list = [“XS”, “M”, “L”, “5XL”, “XL”, “M”, “2X”, “L”, “S”, “M”, “6X”, “M”] 
// findTop2(list);
// returns: [“M”, “L”]

function findTop2(list){
  const map = new Map();
  let max1= {
    count: 0,
    size: []
  };
  let max2= {
    count: 0,
    size: []
  };
  for(let i=0; i<list.length; i++) {debugger;
    const key = list[i];
    map.set(key, (map.get(list[i])|| 0) + 1);
  }
  for(let [key,value] of map){
    if(map.get(key) > max2.count) {
      max2.count = map.get(key);
      max2.size = key;
    }
    if(max1.count < max2.count) {
      [max1, max2] = [max2, max1];
    }
  }
  return [max1.size, max2.size];
}
const list = ["XS", "M", "L", "5XL", "XL", "M", "2X", "L", "S", "M", "6X", "M", "XS"];
console.log(findTop2(list));

