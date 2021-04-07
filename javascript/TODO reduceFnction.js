// wrote reduce function

Array.prototype.myReducer = function(callback, init) {
  if(this.length === 0) return init;
  let acc = null;
  let index = 0;
  if(typeof init !== "undefined") {
    acc = init;
  } else {
    acc = this[index];
    index++;
  }
  for(; index < this.length; index++) {
    acc = callback(acc, this[index]);
  }
  return acc;
}

[1,2,3].myReducer((acc, item)=>acc+item,10);
// 16
