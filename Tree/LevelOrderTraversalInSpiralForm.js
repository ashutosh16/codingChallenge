//Level order traversal in spiral form
{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function spiralTraversal(root, iterator) {
    let stack1 = [root],
      stack2 = [];
    
    while(stack1.length > 0 || stack2.length > 0) {
      while (stack1.length > 0 ) {
        let node = stack1.pop();
        if(node.right) stack2.push(node.right);
        if(node.left) stack2.push(node.left);
        iterator(node.data);
      }

      while(stack2.length > 0) {
        let node = stack2.pop();
        if(node.left) stack1.push(node.left);
        if(node.right) stack1.push(node.right);
        iterator(node.data);
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
  spiralTraversal(root, (data) => {
    console.log(data);
  });
  
  //Input
  /*         1        */
  /*       /   \      */
  /*     2      3     */
  /*    /  \  /   \   */
  /*   4   5  6   7   */

  // Output: 1 2 3 7 6 5 4 


}