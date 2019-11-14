//Find Longest binary Search Tree in given Binary tree.

class BST {
  constructor(val){
    this.val = val;
    this.height = 0;
    this.isBST = true;
    this.left = null;
    this.right = null;
    this.minVal = Number.MAX_SAFE_INTEGER;
    this.maxVal = Number.MIN_SAFE_INTEGER;
    this.length = 1;
  }

  addNode(val) {
    if(val <= this.val) {
      if (this.left !== null) {
        this.left.addNode(val);
      } else {
        this.left = new BST(val);
      }
    } else {
      if (this.right !== null) {
        this.right.addNode(val);
      } else {
        this.right = new BST(val);
      }
      
    }
  }

  travel(callback, order ='in-order'){
    (order === 'pre-order') ? callback(this) : null;
    (this.left) ? this.left.travel(callback, order) : null;
    (order === 'in-order') ? callback(this) : null;
    (this.right) ? this.right.travel(callback, order) : null;
    (order === 'post-order') ? callback(this) : null;
  }
}

var bt = new BST(10);
bt.addNode(5);
bt.addNode(15);
bt.addNode(2);
bt.addNode(20);
bt.addNode(1);
bt.travel((node)=> {
  debugger;
  let leftHeight = node.left ? (node.left.height + 1) : 0;
  let rightHeight = node.right ? (node.right.height + 1) : 0;
  node.height = (leftHeight > rightHeight) ? leftHeight : rightHeight;
  // console.log(node);
}, 'post-order');

var bt2 = new BST(50);
bt2.left = new BST(30);
bt2.right = new BST(60);
bt2.left.left = new BST(5);
bt2.left.right = new BST(20);
bt2.right.left = new BST(45);
bt2.right.right = new BST(70);
bt2.right.right.right = new BST(80);
bt2.right.right.left = new BST(65);
let longestBST = null;

bt2.travel((node) => {
  let leftLength = node.left ? node.left.length : 0; //Length of all left node
  let rightLength = node.right ? node.right.length : 0; //Length of all right node
  node.length = leftLength + rightLength + node.length; //Length of a tree

  node.minVal = (node.left && node.left.minVal < node.val) ? node.left.minVal : node.val; //Min val in tree
  node.minVal = (node.right && node.right.minVal < node.minVal) ? node.right.minVal : node.minVal;

  node.maxVal = (node.left && node.left.maxVal > node.val) ? node.left.maxVal : node.val;//Max value in tree
  node.maxVal = (node.right && node.right.maxVal > node.maxVal) ? node.right.maxVal : node.maxVal;

  //maxValue in left tree < current node value < minValue from right sub tree --> Then is BST
  node.isBST = ((node.left) ? (node.left.maxVal < node.val) : true) && ((node.right) ? (node.right.minVal > node.val) : true);
  if (node.isBST){
    if (longestBST) {
      if (longestBST.length < node.length) {
        longestBST = node;
      }
    } else {
      longestBST = node;
    }
    
  }
  console.log(node);
}, 'post-order');
console.log('Longest BST');
console.log(longestBST);

