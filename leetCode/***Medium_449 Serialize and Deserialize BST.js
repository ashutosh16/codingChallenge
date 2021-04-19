// https://leetcode.com/problems/serialize-and-deserialize-bst/

// Serialization is converting a data structure or object into a sequence of 
// bits so that it can be stored in a file or memory buffer, 
// or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
// Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.
// The encoded string should be as compact as possible.

// Example 1:
// Input: root = [2,1,3]
// Output: [2,1,3]

// Example 2:
// Input: root = []
// Output: []

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  const result = [];
  const preOrder = (root)=>{
    if(!root) {
      result.push("X");
    } else {
      result.push(root.val);
      preOrder(root.left);
      preOrder(root.right);
    }
  }
  preOrder(root);
  return result.join("-");
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  const queue = data.split("-");
  const travel = ()=>{
    const data = queue.shift();
    if(data === "X") return null;
    const node = new TreeNode(data);
    node.left = travel();
    node.right = travel();
    return node;
  }
  return travel(data);
};

// Your functions will be called as such:
serialize([2,1,3]); //2-1-X-X-3-X-X
deserialize("2-1-X-X-3-X-X"); //[2,1,3]

