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