 {
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function findInorderSuccessor(root, data, p = { next: null }) {
    if (root) {
      let result = findInorderSuccessor(root.right, data, p);
      if (result) {
        return result;
      } else {
        if (root.data === data) {
          return p.next;
        }
        p.next = root.data;
        return findInorderSuccessor(root.left, data, p);
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

  console.log(findInorderSuccessor(root, 3));
  console.log(findInorderSuccessor(root, 1));
}


  //Input
  /*         1        */
  /*       /   \      */
  /*     2      3     */
  /*    /  \  /   \   */
  /*   4   5  6   7   */
