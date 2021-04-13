//Print the top view of the tree.
//         1
//       /   \
//      2     3
//.    / \   / \
//    4   5 6.  7

// output : 4 2 1 3 7

function TopView(node){
  let print = (node, direction) => {
    if(direction === 'left'){
      node.left && print(node.left, direction);
      console.log(node.data);
    } else
    if(direction === 'right'){
      console.log(node.data);
      node.right && print(node.right, direction);
    }
  }
  
  if(node){
    print(node, 'left');
    node.right && print(node.right, 'right');
  } else {
    return null;
  }
    
}

function Tree(data){
  return {
    data: data,
    left : null,
    right: null
  }
}

let root = Tree(1);
root.left = Tree(2);
root.right = Tree(3);
root.left.left = Tree(4);
root.left.right = Tree(5);
root.right.left = Tree(6);
root.right.right = Tree(7);

TopView(root);




