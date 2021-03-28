// https://leetcode.com/problems/subtree-of-another-tree/
// Subtree of Another Tree
// Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s.
// A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

// Example 1:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
// Given tree t:
//    4 
//   / \
//  1   2
// Return true, because t has the same structure and node values with a subtree of s.
 

// Example 2:
// Given tree s:

//      3
//     / \
//    4   5
//   / \
//  1   2
//     /
//    0
// Given tree t:
//    4
//   / \
//  1   2
// Return false.



/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  
  function isValid(s, t){
    if(s === null && t === null) return true;
    if(s && t && s.val === t.val) {
      return isValid(s.left, t.left) && isValid(s.right, t.right);
    }
    return false;
  }
  
  
  function run(s,t){
    if(!s || !t) return false;
    let result = false;
    if(s && t && s.val === t.val) {
      result = isValid(s.left,t.left) && isValid(s.right,t.right);
      if(result) return true;
    }
    return run(s.left, t) || run(s.right, t);
  }
  return run(s, t);
};




