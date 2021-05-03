// https://leetcode.com/problems/flip-equivalent-binary-trees/

// For a binary tree T, we can define a flip operation as follows: choose any node, 
// and swap the left and right child subtrees.

// A binary tree X is flip equivalent to a binary tree Y if and
// only if we can make X equal to Y after some number of flip operations.

// Given the roots of two binary trees root1 and root2, 
// return true if the two trees are flip equivelent or false otherwise.

// Example 1:
// Flipped Trees Diagram
// Input: root1 = [1,2,3,4,5,6,null,null,null,7,8], root2 = [1,3,2,null,6,4,5,null,null,null,null,8,7]
// Output: true
// Explanation: We flipped at nodes with values 1, 3, and 5.

// Example 2:
// Input: root1 = [], root2 = []
// Output: true

// Example 3:
// Input: root1 = [], root2 = [1]
// Output: false

// Example 4:
// Input: root1 = [0,null,1], root2 = []
// Output: false

// Example 5:
// Input: root1 = [0,null,1], root2 = [0,1]
// Output: true

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
// With recurssion
var flipEquiv = function(root1, root2) {
  if(!root1 && !root2) return true;
  if(!root1 || !root2) return false;
  if(root1.val !== root2.val) return false;

  return (flipEquiv(root1.left, root2.left) && flipEquiv(root1.right, root2.right)) || 
          (flipEquiv(root1.left, root2.right) && flipEquiv(root1.right, root2.left));
  
};

// Hint: Serialize both trees with preorder and smaller child first and push null once left and right child are done.
// both trees serialized value is same then return true
// travel(root, list) {
//   if(root) {
//     list.push(root.val);
//     if(root.left.val < root.right.val) { 
//       travel(root.left, list); 
//       travel(root.right, list); 
//     }
//     else { 
//       travel(root.right, list); 
//       travel(root.left, list); 
//     }
//   }
// }
// 

var flipEquiv = function(root1, root2) {
  const DFS = (node, list)=>{
    if(node) {
      list.push(node.val);
      const L = node.left !== null ? node.left.val : -1; 
      const R = node.right !== null ? node.right.val : -1;
      if(L < R) {
        DFS(node.left, list);
        DFS(node.right, list);
      } else {
        DFS(node.right, list);
        DFS(node.left, list);
      }
      list.push(null);
    }
  }
  const list1 =[];
  const list2 =[];
  DFS(root1, list1);
  DFS(root2, list2);
  return list1.join() === list2.join();
};

flipEquiv([1,2,3,4,5,6,null,null,null,7,8], [1,3,2,null,6,4,5,null,null,null,null,8,7]); // true
//                          1
//               2                    3
//          4           5        6         null
// null       null   7     8

// list1 and list2 
// [
//   1,    2,    4, null, 5,
//   7,    null, 8, null, null,
//   null, 3,    6, null, null,
//   null
// ]


