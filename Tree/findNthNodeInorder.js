// Find n-th node of inorder traversal
// Time Complexity O(n)
{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function inOrder(root, n, obj = { count : 0 }) {
    if(root.left !== null) {
      inOrder(root.left, n, obj);
    }
    obj.count = obj.count + 1;
    if (obj.count === n ) {
      return root.data;
    }
    if (root.right !== null) {
      inOrder(root.right, n, obj);
    }
  }

  var root = new Node(10);
  root.left = new Node(20);
  root.right = new Node(30);
  root.left.left = new Node(40);
  root.left.right = new Node(50);


  console.log(inOrder(root, 4));
}