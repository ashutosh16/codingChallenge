// 1008. Construct Binary Search Tree from Preorder Traversal
// https://leetcode.com/problems/construct-binary-search-tree-from-preorder-traversal/

// Add to List

// Share
// Return the root node of a binary search tree that matches the given preorder traversal.

// (Recall that a binary search tree is a binary tree where for every node, any descendant of node.
// left has a value < node.val, and any descendant of node.right has a value > node.val.  
// Also recall that a preorder traversal displays the value of the node first, then traverses node.left, then traverses node.right.)

// It's guaranteed that for the given test cases there is always possible to find a binary search tree with the given requirements.

// Example 1:

// Input: [8,5,1,7,10,12]
// Output: [8,5,10,1,7,null,12]

// https://www.youtube.com/watch?v=9sw8RRsBw6s&list=PLEJXowNB4kPwCPVjDv6KsAsThtDOCQUok&index=20


// Definition for a binary tree node.
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
  if(!preorder.length) return null;
  let root = new TreeNode(preorder[0]);
  if(preorder.length > 1) {
    let min = Number.MIN_SAFE_INTEGER;
    let max = Number.MAX_SAFE_INTEGER;
    createBST(preorder,root, 1, min, max);
  }
  return root;

};

function createBST(preorder, curr, pos, min, max){
  if(pos >= preorder.length || preorder[pos] < min || preorder[pos] > max) {
    return pos;
  }
  
  if(preorder[pos] <= curr.val) {
    curr.left = new TreeNode(preorder[pos]);
    pos ++;
    pos = createBST(preorder, curr.left, pos, min, curr.val);
  }
  
  if(pos >= preorder.length) return pos;
  
  if(preorder[pos] > curr.val && preorder[pos] < max){
    curr.right = new TreeNode(preorder[pos]);
    pos++;
    pos = createBST(preorder, curr.right, pos, curr.val+1, max);
  }
  
  return pos;
}



bstFromPreorder([8,5,1,7,10,12]);



