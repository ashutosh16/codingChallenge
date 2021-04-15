// 104. Maximum Depth of Binary Tree
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Given the root of a binary tree, return its maximum depth.
// A binary tree's maximum depth is the number of nodes along the longest path 
// from the root node down to the farthest leaf node.

// Example 1:
// Input: root = [3,9,20,null,null,15,7]
// Output: 3

// Example 2:
// Input: root = [1,null,2]
// Output: 2

// Example 3:
// Input: root = []
// Output: 0

// Example 4:
// Input: root = [0]
// Output: 1

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
 * @return {number}
 */

// DFS
var maxDepth = function(root) {
  return (!root) ? 0 : Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;   
};

// BFS
var maxDepth = function(root) {
  if(!root) return 0;
  const queue = [root];
  let depth = 0;
  while(queue.length) {
    depth++;
    // only remove the nodes which are already present in queue this are nodes at this depth.
    const childCountAtThisLevel = queue.length; 
    for(let i=0; i<childCountAtThisLevel; i++) {
      const node = queue.shift();
      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }
  return depth;
}

