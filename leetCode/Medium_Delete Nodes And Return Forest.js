// https://leetcode.com/problems/delete-nodes-and-return-forest/
// Given the root of a binary tree, each node in the tree has a distinct value.
// After deleting all nodes with a value in to_delete, we are left with a forest (a disjoint union of trees).
// Return the roots of the trees in the remaining forest.  You may return the result in any order.

// Example 1:
// Input: root = [1,2,3,4,5,6,7], to_delete = [3,5]

//           1
//         /   \
//        2      3
//      /  \    /  \
//     4    5  6    7
     
// Output: [[1,2,null,4],[6],[7]]
 

// Constraints:

// The number of nodes in the given tree is at most 1000.
// Each node has a distinct value between 1 and 1000.
// to_delete.length <= 1000
// to_delete contains distinct values between 1 and 1000.


 //Definition for a binary tree node.
 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

/**
 * @param {TreeNode} root
 * @param {number[]} to_delete
 * @return {TreeNode[]}
 */
var delNodes = function(root, to_delete) {
  let toDeletMap = {};
  let remaining = [];
  
  to_delete.forEach(item => {
    toDeletMap[item] = true;
  });
  
  let removeNode = (root, remaining, toDeletMap) => {
    if(!root) {
      return null;
    }
    
    let leftTree = removeNode(root.left, remaining, toDeletMap);
    let rightTree = removeNode(root.right, remaining, toDeletMap)
    if(!!toDeletMap[root.val]) {
      leftTree && remaining.push(leftTree);
      rightTree && remaining.push(rightTree);
      return null;
    }
    root.left = leftTree;
    root.right = rightTree;
    return root;
  }
  
  removeNode(root, remaining, toDeletMap);
   if(!toDeletMap[root.val]) {
     remaining.push(root);
   }
  return remaining;
};

let root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)));
let result = delNodes(root, [3,5]);
console.log(result);

