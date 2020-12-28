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


//If we want to upgrade this program to check is tree foldable and match left half with value with right half value. 
//Or tree is foldable with mirror image.

{
  function Node(data) {
    return {
      data,
      left: null,
      right: null
    }
  }
  
  function _isReverse(a, b){
    if(!a && !b) return true;
    if(a && b){
      if(a.data === b.data 
        && (!a.left === !b.right) 
        && (!a.right === !b.left)
      ){
        return _isReverse(a.left, b.right) 
          && _isReverse(a.right, b.left);
      }
    }
    return false;
  }

  function IsTreeFoldable(root){
    if(!root) return true;
    if(!root.left && !root.right) return true;
    return _isReverse(root.left, root.right);
  }
  
  
  var root = new Node(10);
  root.left = new Node(5); root.right = new Node(5);
  root.left.left = new Node(4); root.right.right = new Node(4);
  root.left.right = new Node(2); root.right.left = new Node(2);
  root.left.right.left = new Node(1) ;root.right.left.right = new Node(1);
  
  const result = IsTreeFoldable(root);
  console.log(result);
  //True


}
