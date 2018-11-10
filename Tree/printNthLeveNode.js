// Print all nodes at a given level
{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function printAllNodesAtGivenLevel(root, n, nodeList = '') {
    debugger;
    if(root === null) {
      return nodeList;
    }
    if(n === 1) {
      nodeList += root.data + ' - ';
    } else {
      if(root.left) {
        nodeList = printAllNodesAtGivenLevel(root.left, n - 1, nodeList);
      }
      if(root.right) {
        nodeList = printAllNodesAtGivenLevel(root.right, n - 1, nodeList);
      }
    }
    return nodeList;
  }


  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);

  let nodeList = printAllNodesAtGivenLevel(root, 3);
  console.log(nodeList);


  //Input
  /*         1        */
  /*       /   \      */
  /*     2      3     */
  /*    /  \  /   \   */
  /*   4   5  6   7   */
  // Output
  // 4 - 5 - 6 - 7 - 
}
