// Check for Children Sum Property in a Binary Tree
//Sum of the left and right child should be equal to head.

{
  function Node (data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function checkSum(root) {
    if(!root || (!root.left && !root.right)) { // Leaf node and null nodes are always true.
      return true;
    }
    
    if(root.data === ((root.left ? root.left.data : 0) + (root.right ? root.right.data : 0 ))) {
      return checkSum(root.left) && checkSum(root.right);
    }
  }

  let root = new Node(10);
  root.left = new Node(2);
  root.right = new Node(8);
  root.left.left = new Node(2);
  root.right.left = new Node(5);
  root.right.right = new Node(3);
  console.log(checkSum(root));

  //Input
  /*         10        */
  /*       /    \      */
  /*     2       8     */
  /*    /  \   /  \    */
  /*   2      5    3   */
  // Output: True

}
