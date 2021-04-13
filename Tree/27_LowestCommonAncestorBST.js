// Find lowest common ancestor from the giver binary search tree.

function LCA(root, num1, num2) {
//   if we found num1 or num2 means common ancestor is found node 
//   because we are travelling top to bottom and both node must be child od the current node.
//   as we found one node its common ancestor.
  if(root.data === num1 || root.data === num2) return root;
  
//   if num1 is in left sub tree and num2 is in right sub tree means current node is common ancestor.
  if( Math.min(num1, num2) <= root.data && root.data < Math.max(num1, num2)) return root;
  
//   Both num1 and num2 are in right subTree hence run LCA on right tree
  if((root.data < Math.min(num1, num2)) && (root.data < Math.max(num1, num2))) {
    return root.right && LCA(root.right, num1, num2);
  }
  
//   Both num1 and num2 are in left subTree hence run LCA on left tree
  if((root.data > Math.max(num1, num2)) && (root.data > Math.min(num1, num2))) {
    return root.left && LCA(root.left, num1, num2);
  }
}

function Node(data){
  return {
    data,
    left: null,
    right: null
  }
}

let root = Node(10);
root.left = Node(-10);
root.right = Node(30);

root.left.right = Node(8);
root.left.right.left = Node(6);
root.left.right.right = Node(9);

root.right.right = Node(60);
root.right.left = Node(25);

root.right.right.right = Node(78);
root.right.left.right = Node(28);


var result;

result = LCA(root,28,78);
console.log('28,78 = ' + result.data); // 30

result = LCA(root, 6, 9);
console.log('6, 9 = '+ result.data); // 8

result = LCA(root, 30, 78);
console.log('30, 78 = '+ result.data); // 30

// Input Tree
//                     10
//                   /    \
//                 /        \
//              -10         30
//                 \       /   \
//                  8     25    60
//                 / \     \     \
//                6   9    28    78
// '28,78 = 30'
// '6, 9 = 8'
// '30, 78 = 30'
