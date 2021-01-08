// Random Pick With Weight: https://leetcode.com/problems/random-pick-with-weight/

// You are given an array of positive integers w where w[i] describes the weight of ith index (0-indexed).
// We need to call the function pickIndex() which randomly returns an integer in the range [0, w.length - 1]. pickIndex() 
// should return the integer proportional to its weight in the w array. 
// For example, for w = [1, 3], the probability of picking the index 0 is 1 / (1 + 3) = 0.25 (i.e 25%) 
// while the probability of picking the index 1 is 3 / (1 + 3) = 0.75 (i.e 75%).
// More formally, the probability of picking index i is w[i] / sum(w).

// Reference : https://www.youtube.com/watch?v=fWS0TCcr-lE
//             https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

/**
 * @param {number[]} w
 */
var Solution = function(w) {
    
};

/**
 * @return {number}
 */
Solution.prototype.pickIndex = function() {
    
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(w)
 * var param_1 = obj.pickIndex()
 */
