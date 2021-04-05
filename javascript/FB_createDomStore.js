//Write a class called DOMStore that stores a Node and a value (reimplement Map). DOMStore contains the following functions:
// has(node) // returns boolean
// get(node) // returns node or undefined
// set(node, value) // "upsert", update or insert

// ES6 Maps can have objects as keys, so you can use the Node as the key.
function DOMStore(){
  const map = new Map();
  return {
    set: map.set.bind(map),
    has: map.has.bind(map),
    get: map.get.bind(map)
  };
}

const map = DOMStore();
map.set(document.getElementsByClassName("list-body")[2], "list-body 2");
map.set(document.getElementsByClassName("list-body")[1], "list-body 1");

map.has(document.getElementsByClassName("list-body")[2]); // true
map.has(document.getElementsByClassName("list-body")[0]); // false

map.get(document.getElementsByClassName("list-body")[1]); // "list-body 1"




