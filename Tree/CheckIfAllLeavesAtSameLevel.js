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
Bt.left.right = new Node(7);

Bt.left.left.left = new Node(0);


function LeafNodeLevel(node, level = 0) {
  if(!node || (!node.left && !node.right)) {
    return level;
  } else {
    let leftLevel = LeafNodeLevel(node.left, level+1),
      rightLevel = LeafNodeLevel(node.right, level+1);

    if(leftLevel !== -1 && rightLevel !== -1 && leftLevel === rightLevel) {
      return leftLevel;
    } else {
      return -1;
    }
  }
}

let result = LeafNodeLevel(Bt);

console.log(result);


//         10
//        /  \
//       5    20
//      /
//     1
//    /
//   0
