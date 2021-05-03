// https://leetcode.com/problems/find-duplicate-subtrees/
// 652. Find Duplicate Subtrees

// Given the root of a binary tree, return all duplicate subtrees.
// For each kind of duplicate subtrees, you only need to return the root node of any one of them.
// Two trees are duplicate if they have the same structure with the same node values.

// Example 1:
// Input: root = [1,2,3,4,null,2,4,null,null,4]
// Output: [[2,4],[4]]

// Example 2:
// Input: root = [2,1,1]
// Output: [[1]]

// Example 3:
// Input: root = [2,2,2,3,null,3,null]
// Output: [[2,3],[3]]

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
 * @return {TreeNode[]}
 */
// Hint : 
// Serialize each node and push into the map using serialize string as key and ocurrences count as value
// if key present more then 1 times means its duplicate sub tree.

var findDuplicateSubtrees = function(root) {
  const result = [];
  
  const findSubTrees = (root, map, result) => {
    if(!root) return "*";
    let subTree = `${root.val}-${findSubTrees(root.left, map, result)}-${findSubTrees(root.right, map, result)}`;
  
    map.set(subTree, (map.get(subTree) || 0)+1);
    map.get(subTree) === 2 && result.push(root);
    return subTree;
  }
  
  findSubTrees(root, new Map(), result);
  return result;
};
findDuplicateSubtrees([1,2,3,4,null,2,4,null,null,4]);
// [[4],[2,4]]




