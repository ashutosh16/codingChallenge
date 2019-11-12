// A program to check if a binary tree is Binary Search Tree or not
// Each left node should be less than or equal to or right node is greater than equal to the current node.
// Time complexity O(n)
{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function isBST(root, min = Number.MIN_SAFE_INTEGER, max = Number.MAX_SAFE_INTEGER) {
    if(!root) return true;
    if(root.data < max && root.data >= min) {
      return (isBST(root.left, min, root.data) && isBST(root.right, root.data, max + 1));
    } else {
      return false;
    }
  }

  var root = new Node(50);
  root.left = new Node(40);
  root.right = new Node(60);

  root.left.left = new Node(20);
  root.left.right = new Node(45);

  root.right.right = new Node(70);

  console.log(isBST(root));
}
