// Level order traversal line by line
{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function printNodeLevelByLevel(root) {
    let queue = [root, null],
      nodeList = '';

    while(queue.length > 0) {
      let c = queue.shift();
      if(c !== null) {
        nodeList += ' ' + c.data;  
        c.left && queue.push(c.left);
        c.right && queue.push(c.right);
      } else {
        console.log(nodeList);
        nodeList = '';
        (queue.length > 0) && queue.push(null);// If we didnt check the length here it will go to infinite loop.
      }
    }
  }

  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);
  printNodeLevelByLevel(root);

  //Input
  /*         1        */
  /*       /   \      */
  /*     2      3     */
  /*    /  \  /   \   */
  /*   4   5  6   7   */
//Output
// ' 1'
// ' 2 3'
// ' 4 5 6 7'

}
