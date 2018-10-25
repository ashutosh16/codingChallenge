// Populate Inorder Successor for all nodes
{
  function Node(data){
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function _printInorderSuccessor(root, p) {
    debugger;
    if(root) {
      _printInorderSuccessor(root.right, p);
      console.log('Inorder successor for '+ root.data + ' - '+ p.next);
      p.next = root.data;
      _printInorderSuccessor(root.left, p);
    }
  }

  function printInorderSuccessorForAllNodes(root) {
    _printInorderSuccessor(root, { next: null }); //next value need to passed by reference hence wrap in object.
  }


  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);

  printInorderSuccessorForAllNodes(root);


  //Input
  /*         1        */
  /*       /   \      */
  /*     2      3     */
  /*    /  \  /   \   */
  /*   4   5  6   7   */

  // Output 
  // Inorder successor for 7 - null
  // Inorder successor for 3 - 7
  // Inorder successor for 6 - 3
  // Inorder successor for 1 - 6
  // Inorder successor for 5 - 1
  // Inorder successor for 2 - 5
  // Inorder successor for 4 - 2
}