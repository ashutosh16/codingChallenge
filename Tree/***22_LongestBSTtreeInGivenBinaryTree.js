 // Find the longest BST tree in given binary tree.
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

//HINT: https://www.youtube.com/watch?v=4fiDs7CCxkc

bt2.travel((node) => {
  let leftLength = node.left ? node.left.length : 0; //Length of left sub tree
  let rightLength = node.right ? node.right.length : 0; //Length of right sub tree
  node.length = leftLength + rightLength + node.length; //Length of a tree = 1 + leftSubTree + rightSubTree

  // node.minVal is Min val from tree with root as current node.
  node.minVal = (node.left && node.left.minVal < node.val) ? node.left.minVal : node.val; //comapare with left subTree MinVal
  node.minVal = (node.right && node.right.minVal < node.minVal) ? node.right.minVal : node.minVal; //comapare with right subTree MinVal

  // node.maxVal is Max val from tree with root as current node.
  node.maxVal = (node.left && node.left.maxVal > node.val) ? node.left.maxVal : node.val;
  node.maxVal = (node.right && node.right.maxVal > node.maxVal) ? node.right.maxVal : node.maxVal;

  // Condition to current tree is BST
  // 1) left subTree is BST && right subTree is BST
  // 2) node.left.max <= node.data < node.rihgt.min
  node.isBST = ((node.left) ? (node.left.isBST && (node.left.maxVal < node.val)) : true) && 
               ((node.right) ? node.right.isBST && (node.right.minVal > node.val)) : true);
  
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
