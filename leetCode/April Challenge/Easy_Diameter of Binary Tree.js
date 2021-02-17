//Given a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
// https://leetcode.com/explore/other/card/30-day-leetcoding-challenge/529/week-2/3293/
// https://www.youtube.com/watch?v=9bCqmaIY2as&list=PLEJXowNB4kPwCPVjDv6KsAsThtDOCQUok&index=11


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

const findLength = (root) => {
  if(!root) return [0,0];
  const left = findLength(root.left);
  const right = findLength(root.right);
//   result[0] represent the longest branch either from left or right
//   result[1] represent the MaxOf(leftTree OR rightTree OR treeFromLeftToRightIncludingCurrentNode)
  return [Math.max(left[0], right[0]) + 1 , // longest branch including current node.
          Math.max(left[1], right[1], (left[0] + right[0] + 1))];
}

/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  if(!root) return 0;
  const result = findLength(root);
  return Math.max(result[0], result[1]) - 1;
};
