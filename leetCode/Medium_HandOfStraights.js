// Alice has a hand of cards, given as an array of integers.
// Now she wants to rearrange the cards into groups so that each group is size W, and consists of W consecutive cards.
// Return true if and only if she can.
// Note: This question is the same as "Divide Array in Sets of K Consecutive Numbers"
// 1296: https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/

// Example 1:
// Input: hand = [1,2,3,6,2,3,4,7,8], W = 3
// Output: true
// Explanation: Alice's hand can be rearranged as [1,2,3],[2,3,4],[6,7,8]

// Example 2:
// Input: hand = [1,2,3,4,5], W = 4
// Output: false
// Explanation: Alice's hand can't be rearranged into groups of 4.

// Constraints:

// 1 <= hand.length <= 10000
// 0 <= hand[i] <= 10^9
// 1 <= W <= hand.length

//Hint: 
// Sort the array
// Use 2 pointer Tech 

/**
 * @param {number[]} hand
 * @param {number} W
 * @return {boolean}
 */

function isPossibleDivide(arr, W){
  arr = arr.sort((a,b)=>a-b);
  for(let i=0; i<arr.length; i++){
    if(arr[i] === null) continue;
    let count = 1;
    let pre = arr[i];
    let j = i+1;
    while(j < arr.length && count < W) {
      while(pre === arr[j] || arr[j] === null) j++;
      if(j>= arr.length || pre+1 !== arr[j]) return false;
      pre = arr[j];
      arr[j] = null;
      count++;
      j++;
    }
	if(count < W) return false;
  }
  return true;
}
console.log(HandOfStraight([1,1,2,2,3,3], 3));

----------------------------------------------------------------------------------------------------------------------------------

var isNStraightHand = function(hand, W) {
    if(hand.length % W !== 0) return false;
    hand.sort((a,b) => a-b);
  
    for(let i = 0; i < hand.length; i++){
      if(hand[i] !== null ){
        let count = 1;
        let j = i+1;
        let pre = hand[i];

        while(count < W) {

          while(j < hand.length && (hand[j] === pre || hand[j] === null || j === i)){
           j++;       
          }

          if(j === W.length) return false;

          if(pre+1 === hand[j]){
            pre = hand[j];
            hand[j] = null;
            count++;
            j++;
          } else {
            return false;
          }
        }
      }
    }
    
    return true;
};

isNStraightHand([1,2,3,6,2,3,4,7,8], 3);
//True

isNStraightHand([8,8,9,7,7,7,6,7,10,6], 2); 
//True
