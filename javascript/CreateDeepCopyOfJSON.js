
function DeepCopy(obj, createKeyFun){
  if(Array.isArray(obj)) {
    return obj.map(item => DeepCopy(item, createKeyFun));
  } else
    if(obj !== null && typeof obj === 'object'){
      return Object.keys(obj).reduce((acc, current) => {
        let key = createKeyFun
          ? createKeyFun(current)
          : current;

        acc[key] = DeepCopy(obj[current], createKeyFun);
        return acc;
      }, {});
    } else {
      return obj;
    }
}

const obj = {
  foo: '1',
  nested: {
    child: {
      withArray: [
        {
          grandChild: ['hello']
        }
      ]
    }
  }
};
