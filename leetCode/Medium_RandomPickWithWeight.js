// Random Pick With Weight: https://leetcode.com/problems/random-pick-with-weight/

// You are given an array of positive integers w where w[i] describes the weight of ith index (0-indexed).
// We need to call the function pickIndex() which randomly returns an integer in the range [0, w.length - 1]. pickIndex() 
// should return the integer proportional to its weight in the w array. 
// For example, for w = [1, 3], the probability of picking the index 0 is 1 / (1 + 3) = 0.25 (i.e 25%) 
// while the probability of picking the index 1 is 3 / (1 + 3) = 0.75 (i.e 75%).
// More formally, the probability of picking index i is w[i] / sum(w).

// Reference : https://www.youtube.com/watch?v=fWS0TCcr-lE
//             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

// HINT: Create a bucket with sum of the arry from left to right.
// If arr = [1,2,3] this.bucket = [1,3,6];
// |<---->|<-------->|<------------>|
//    1        3             6
//  (0to1)| (2 to 3) |   ( 4 to 6)
// index 0| index 1  | index 2
/**
 * @param {number[]} w
 */
var Solution = function(w) {
  this.bucket = [];
  this.bucketWeight = 0;
  
  let weight = 0;
  for(let i=0; i<w.length; i++){
    weight += w[i];
    this.bucket[i] = weight;
  }
  this.bucketWeight = weight;
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
  //this should be the random umber between 0 to total weight sum which is bucketWeight.
  let randomNumber = Math.floor(Math.random() * (this.bucketWeight + 1));
  
  let binarySearch = (randomNumber, l=0, r=this.bucket.length-1) => {
    let mid = Math.floor((r+l) / 2);
    
    if(randomNumber === this.bucket[mid]) return mid;
    
    if(randomNumber < this.bucket[mid]) {
       if(mid === 0 || this.bucket[mid-1] < randomNumber) return mid;
       return binarySearch(randomNumber, l, mid-1);
    } else {
      return binarySearch(randomNumber, mid+1, r);
    }
  }
    return binarySearch(randomNumber)
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */

var obj = new Solution([1,3])
obj.pickIndex();
obj.pickIndex();
obj.pickIndex();
obj.pickIndex();
obj.pickIndex();


// This will generate the random number between the min and max both min and max number are inclusive.
//   function getRandomIntInclusive(min, max) {
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
//   }
