// We have a collection of stones, each stone has a positive integer weight.
// Each turn, we choose the two heaviest stones and smash them together.  Suppose the stones have weights x and y with x <= y.  
// The result of this smash is:
// If x == y, both stones are totally destroyed;
// If x != y, the stone of weight x is totally destroyed, and the stone of weight y has new weight y-x.
// At the end, there is at most 1 stone left.  Return the weight of this stone (or 0 if there are no stones left.)

 

// Example 1:

// Input: [2,7,4,1,8,1]
// Output: 1

// Explanation: 
// We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
// we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
// we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
// we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of last stone.


// Top Down approch: Move high child node to parent and heapify on that new child node.
function Heapify(arr, i){
  let l = i*2;
  let r = i*2 +1;
  let maxIndex = i;
  
  if(l < arr.length && arr[l] > arr[maxIndex]) maxIndex = l;
  if(r < arr.length && arr[r] > arr[maxIndex]) maxIndex = r;
  
  if(maxIndex !== i) {
    [arr[i], arr[maxIndex]] = [arr[maxIndex], arr[i]];
    Heapify(arr, maxIndex);
  }
  return arr;
}

//Bottom up approch: move the newly added elememt the highest top.
function PushInHeap(arr, item){
  arr.push(item);
  let n = arr.length -1;
  let i = n;
  while(i > 1 && arr[i] > arr[Math.floor(i/2)]){
    let p = Math.floor(i/2);
    [arr[i], arr[p]] = [arr[p], arr[i]];
    i = p;
  }
  return arr;
}

// Do heapify on root node.
function PopFromHeap(arr){
  //Only single element in heap
  if(arr.length == 2) return arr.pop();
  let result = arr[1];
  arr[1] = arr.pop();
  Heapify(arr, 1);
  return result;
}

function CreateHeap(arr){
  arr.unshift(null); // Make array start from 1.
  let n = arr.length-1;
  for(let i = Math.floor(n/2); i > 0; i--) {
    Heapify(arr, i);
  }
  return arr;
}


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function(stones) {
  let arr = CreateHeap(stones);
  // console.log(arr);
  while(arr.length > 2){
    const m1 = PopFromHeap(arr);
    const m2 = PopFromHeap(arr);
    console.log(arr);
    
    if((m1 - m2) > 0) PushInHeap(arr, m1-m2);
    
  }
  return arr.length === 1 ? 0: arr[1];
};

lastStoneWeight([2,7,4,1,8,1]);
// 1



