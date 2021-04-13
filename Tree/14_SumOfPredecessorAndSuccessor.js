// Replace each node in binary tree with the sum of its inorder predecessor and successor
// Time Complexity O(n)
// Space Complexity O(n)

// Hint: Travel DFS and make sequence arr with inorder sequence starting and ending with 0.
// Travel DFS again and then sum node.data = sequence[i-1]+sequence[i+1]

{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function DFS(root, callback) {
    if(root.left !== null) {
      DFS(root.left, callback);
    }
    callback(root);
    if(root.right !== null) {
      DFS(root.right, callback);
    }
  }

  function calculate(root) {
    let sequence = [0]; // no predecessor for first node in inorder sequence
    DFS(root, (node) => {
      sequence.push(node.data);
    });
    sequence.push(0); // no successor for first node in inorder sequence
    
    // sequence = [0,4,5,2,1,6,3,7,0]
    
    let i = 1;
    DFS(root, (node) => {
      node.data = sequence[i-1] + sequence[i+1];
      i++;
    });

    return root;
  }

  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);

  root = calculate(root);
  console.log(root);

  // input In-order {1, 2, 3, 4, 5, 6 , 7}
  // output In-order {2, 9, 3, 11, 4, 13, 3}

  //Input
  /*         1        */
  /*       /   \      */
  /*     2      3     */
  /*    /  \  /   \   */
  /*   4   5  6   7   */
  
  //Output
  /*         11        */
  /*       /    \      */
  /*     9       13    */
  /*    /  \    /   \  */
  /*   2    3  4     3 */
}
