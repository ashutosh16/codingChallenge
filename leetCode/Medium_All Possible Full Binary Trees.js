// https://leetcode.com/problems/all-possible-full-binary-trees/
// Given an integer n, return a list of all possible full binary trees with n nodes. Each node of each tree in the answer must have Node.val == 0.
// Each element of the answer is the root node of one possible tree. You may return the final list of trees in any order.
// A full binary tree is a binary tree where each node has exactly 0 or 2 children.

// Example 1:

// Input: n = 7
// Output: [[0,0,0,null,null,0,0,null,null,0,0],[0,0,0,null,null,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,null,null,null,null,0,0],[0,0,0,0,0,null,null,0,0]]
// Example 2:

// Input: n = 3
// Output: [[0,0,0]]
 /**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
// HINT : used Dynamic programming approch
// like fibonacci series. store all old result. so need not to calculate repeadedly.
//         subTree 7
// subTree1         subTree5
//          subTree1        subTree3
//                       subTree1   subTree1

// Hence find subTree of 1 and cascade to top
var allPossibleFBT = function(n) {
  const map = {};
//   create All Combination Of Left And Right Trees With Root
  const findAllCombination = (leftT, rightT) =>{
    const result = [];
    for(let i=0; i<leftT.length; i++)
      for(let j=0; j<rightT.length; j++) {
        result.push(new TreeNode(0, leftT[i], rightT[j]))
     } 
    return result;
  }
  
  const findFBT = (n, result=[]) => {
    if(n===1) return [new TreeNode(0, null, null)];
    
    for(let i=1; i<=n-2; i+=2) { // i+=2 because only odd numbers can have FBT
      let LT = map[i]; 
      let RT = map[n-i-1];
      if(!LT) {
        LT = findFBT(i);//Find all possible FBT with node i
        map[i] = LT;
      }
      if(!RT) {
        RT = findFBT(n-i-1); // rightTree nodes = total nodes - leftTreeNodes - 1(root Node)
        map[n-i-1] = RT;
      }
      result.push(...findAllCombination(LT, RT));
    }
    return result;
  }
  return findFBT(n);   
};
