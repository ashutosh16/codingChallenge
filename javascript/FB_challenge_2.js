
// A = [{ type:'car', name:'camry', color:'red'}, {type: 'Tv', price:'$1200', color:'black'}, {color:'green', name:'chilly'},....];
// B = [['type', 'car'], ['color', 'green'], ['price':'$2000']];
// Create array of objects from 'A' which are not satisfy condition from 'B' array.


// @function createMappingObject
// @param {Array} 'B' array of array.
// @returns {Object}
function createMappingObject(B) {
  let mappingObject = {};
  B.forEach(element => {
    if(mappingObject[element[0]]){
      mappingObject[element[0]][element[1]] = 1;
    } else {
      mappingObject[element[0]] = {};
      mappingObject[element[0]][element[1]] = 1;
    }
  });

  console.log(mappingObject);
  return mappingObject;
}


// @function find
// @param {Array} 'A' array of object
// @param {Array} 'B' array of array
// @returns {Array} array of objects from 'A' which not match condition from 'A'
function find(A, B) {
  let excludedObject = [];
  let map = createMappingObject(B);
  A.filter(item => {
    let found = false;
    for (key in item) {
      if(map[key]) {
        if(map[key][item[key]] === 1) {
          found = true;
          break;
        }
      }
    };
    if(!found) {
      excludedObject.push(item);
    }
  });
  return excludedObject;
}
let A = [{ type: 'car', name: 'camry', color: 'red' }, { type: 'Tv', price: '$1200', color: 'black' }, { color: 'green', name: 'chilly' }];
let B = [['type', 'car'], ['color', 'green'], ['price', '$2000']];

challenge2(A, B);
// Expected output : [{type: "Tv", price: "$1200", color: "black"}]
