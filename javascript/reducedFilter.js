// Filter an array of objects based on a condition while also filtering out unspecified keys.

function reducedFilter(data, attr, filterFun) {

  return data.filter(item => filterFun(item)).map(item => {
    return attr.reduce((acc, current) => {
      acc[current] = item[current];
      return acc;
    }
    ,{})
  });
  

}

const data = [
  {
    id: 1,
    name: 'john',
    age: 24
  },
  {
    id: 2,
    name: 'mike',
    age: 50
  },
  {
    id: 3,
    name: 'tom',
    age: 55
  }
];

console.log(reducedFilter(data, ['id', 'name'], item => item.age > 24));

// [{ id: 2, name: 'mike' }, { id: 3, name: 'tom' }]
