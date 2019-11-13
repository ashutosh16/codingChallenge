// Find mirror of a given binary tree.
/**
 * 1. Write mirror function to swap left and right nodes of a currnt node.
 * 2. travel the tree in with current node from head and call swap function on each node.
 */

function Node (data){
 this.data = data;
 this.left = null;
 this.right = null;
}

function MirrorTree(node) {
 
 if(!node) return;
 let temp = node.left;
 node.left = node.right;
 node.right = temp;
 
 MirrorTree(node.left);
 MirrorTree(node.right);
 return node;
}

  let root = new Node(10);
  root.left = new Node(2);
  root.right = new Node(8);
  root.left.left = new Node(2);
  root.right.left = new Node(5);
  root.right.right = new Node(3);
  console.log(MirrorTree(root));

  //Input                // Output
  /*         10        *//*         10        */
  /*       /    \      *//*       /    \      */
  /*     2       8     *//*     8       2     */
  /*    / \     / \    *//*    / \     / \    */
  /*   2       5   3   *//*   3   5       2   */
