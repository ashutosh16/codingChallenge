// Check If a String Is a Valid Sequence from Root to Leaves Path in a Binary Tree
// https://leetcode.com/problems/check-if-a-string-is-a-valid-sequence-from-root-to-leaves-path-in-a-binary-tree/

// Given a binary tree where each path going from the root to any leaf form a valid sequence, check if a given string is a valid sequence in such binary tree. 
// We get the given string from the concatenation of an array of integers arr and
// the concatenation of all values of the nodes along a path results in a sequence in the given binary tree.

// Example 1:

// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
// Output: true
// Explanation: 
// The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
// Other valid sequences are: 
// 0 -> 1 -> 1 -> 0 
// 0 -> 0 -> 0

// Example 2:
// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
// Output: false 
// Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence because its not comming till the leaf node.

// // Example 3:
// Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
// Output: false
// Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number[]} arr
 * @return {boolean}
 */
function isValidSequence(root, seq, index=0){
  if(!root) return false;
  if(root.val !== seq[index]) return false;
  //Val is equal and last index: if its leaf node then true else false;
  if(index === seq.length-1) return (!root.left && !root.right);
  //Val is equal but not last index: look for the next index in left subTree and if not found in left subTree then find in right subTree
  return isValidSequence(root.left, seq, index+1) || isValidSequence(root.right, seq, index+1);
}


isValidSequence([0,1,0,0,1,0,null,null,1,0,0], [0,1,0,1]);
//True

isValidSequence([8,null,5,4,null,4], [8]);
//false

