/**
 * Create a data structure twoStacks that represents two stacks.
 * Implementation of twoStacks should use only one array, i.e.,
 * both stacks should use the same array for storing elements.
 * Following functions must be supported by twoStacks.
 * push1(int x) –> pushes x to first stack push2(int x) –> pushes x to second stack
 * pop1() –> pops an element from first stack and return the popped element
 * pop2() –> pops an element from second stack and return the popped element
 * Implementation of twoStack should be space efficient.
 */


function DoubleStack() {
  var stack = {
    list : [],
    st1 : {
      index : -1,
      push: (data) =>{
        stack.list.unshift(data);
        stack.st1.index ++;
        if(stack.st2.index !== -1 ) {
          stack.st2.index ++;
        }
      },
      pop: () =>{
        if(stack.st1.index !== -1) {
          stack.list.shift();
          stack.st1.index --;

          if(stack.st2.index !== -1) {
            stack.st2.index --;
          }
        }
      }
    },
    st2 : {
      index : -1,
      push: (data) =>{
        stack.list.push(data);
        if(stack.st2.index === -1) {
          stack.st2.index = stack.list.length -1;
        }
      },
      pop: () =>{
        if(stack.st2.index !== -1) {
          stack.list.pop();
          if(stack.st2.index === stack.list.length) {
            stack.st2.index = -1;
          }
        }
      }
    }
  }


  return stack;
}
/**
* solution 2
*/
 function TwoStack(){
   let _P2StartIndex = null,
    _a = [];

    return {
      pop1(){
        if (_P2StartIndex > 0){
          let val = _a.splice(_P2StartIndex - 1, 1);
          _P2StartIndex--;
          return val;
        } else {
          return null;
        }
      },
      pop2(){
        if(_a.length){

        }
      },
      push1(){},
      push2(){}
    }

 }
