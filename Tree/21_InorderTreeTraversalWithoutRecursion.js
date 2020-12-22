// Inorder Tree Traversal without Recursion
{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  function Inorder(root, iterator) {
    let currentNode = root,
      stack = [];

    while(stack.length > 0 || currentNode !== null) {
      while (currentNode !== null) {
        stack.push(currentNode);
        currentNode = currentNode.left;
      }
      currentNode = stack.pop();
      iterator(currentNode.data);
      currentNode = currentNode.right;
    }
  }

  let tree = new Node('+');
  tree.left = new Node('*');
  tree.right = new Node('-');
  tree.right.right = new Node(20);
  tree.right.left = new Node(100);

  tree.left.right = new Node(4);
  tree.left.left = new Node(5);
  Inorder(tree, (data)=>{ console.log(data)})
}
