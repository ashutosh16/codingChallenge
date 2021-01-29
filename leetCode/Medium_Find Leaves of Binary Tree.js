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
 * @return {number[][]}
 */
var findLeaves = function(root) {
  if(!root)  return [];
  let result = [];
  travelTree(root, result);
  return result;
};

function travelTree(root, result){
  if(!root) return -1;
  
  let leftH = travelTree(root.left, result);
  let rightH = travelTree(root.right, result);
  
  let nodeH = Math.max(leftH, rightH) + 1;
  
  (!result[nodeH] && (result[nodeH] = []));
  result[nodeH].push(root.val);
  return nodeH;
}
