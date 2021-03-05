
function DeepCopy(obj, createKeyFun){
  //obj is array - Use array.map to create deep copy.
  if(Array.isArray(obj)) {
    return obj.map(item => DeepCopy(item, createKeyFun));
  }
  
  //Obj is JSON object use .reduce( ,{}) for deep copy.
  if(obj !== null && typeof obj === 'object'){
    return Object.keys(obj).reduce((acc, current) => {
      let key = createKeyFun
        ? createKeyFun(current)
        : current;

      acc[key] = DeepCopy(obj[current], createKeyFun);
      return acc;
    }, {});
  }
  
  // Obj is a primitive type.
  return obj;
}

const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild1: ['hello' , { grandGrandObj: 'hello grand grand obj1'}],
          grandChild2: [{ grandGrandObj: 'hi grand grand obj2'}, { grandGrandObj: 'hello grand grand obj2'}]
        }
      ]
    }
  }
};

const upperKeysObj = DeepCopy(obj2, key => key.toUpperCase());

//Output
//{ FOO: '1', NESTED: { CHILD: { WITHARRAY: [{ GRANDCHILD1: ['hello', { GRANDGRANDOBJ: 'hello grand grand obj1' }], GRANDCHILD2: [{ GRANDGRANDOBJ: 'hi grand grand obj2' }, { GRANDGRANDOBJ: 'hello grand grand obj2' }] }] } } }

