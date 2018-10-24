// Is Tree flodable

{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function _isReverse(a,b) {
    if(!a && !b) return true;
    if(a && b) {
      if((!!a.left === !!b.right) && (!!a.right === !!b.left)){
        return _isReverse(a.left, b.right) && _isReverse(a.right, b.left)
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  function isFoldable(root) {
    if (!root) return true;
    if(!root.left && !root.right) return true;
    if(root.left  && root.right) {
      return _isReverse(root.left, root.right);
    } else {
      return false;
    }
  }

  let root1 = new Node(10);
  root1.left = new Node(7);
  root1.right = new Node(15);
  root1.left.right = new Node(9);
  root1.right.left = new Node(11);
  console.log('root1 flodable : ', isFoldable(root1));
  
  let root2 = new Node(10);
  root2.left = new Node(7);
  root2.right = new Node(15);
  root2.left.left = new Node(5);
  root1.right.left = new Node(11);
  console.log('root2 flodable : ', isFoldable(root2));

}