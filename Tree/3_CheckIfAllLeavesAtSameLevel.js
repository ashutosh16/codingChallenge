// Check if all leaves are at same level

function Node (data){
  this.data = data;
  this.left = null;
  this.right = null;
}


let Bt = new Node(10);

Bt.left = new Node(5);
Bt.right = new Node(20);

Bt.left.left = new Node(1);

Bt.right.right = new Node(30);

Bt.left.left.left = new Node(0);
Bt.right.right.right = new Node(40);


function LeafNodeLevel(node, level=0, leafLevel=[]) {
  if(!node) return true;
  if(!node.left && !node.right){
    console.log(level,node);
    if(!leafLevel.length) {
      leafLevel.push(level);
      return true;
    } else {
      return level === leafLevel[0];
    }
  } else {
    return (LeafNodeLevel(node.left, level+1, leafLevel) &&
    LeafNodeLevel(node.right, level+1, leafLevel));
  }

  return leafLevel;
}

var result = LeafNodeLevel(Bt);
console.log(level);



//         10
//        /  \
//       5    20
//      /      \
//     1       30
//    /          \
//   0           40
