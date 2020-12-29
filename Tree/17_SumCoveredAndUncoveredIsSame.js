// Check sum of Covered and Uncovered nodes of Binary Tree
// * For calculating sum of Uncovered nodes we will follow below steps:
// 1) Start from root, go to left and keep going until left child is available,
//    if not go to right child and again follow same procedure until you reach a leaf node.
// 2) After step 1 sum of left boundary will be stored, 
//    now for right part again do the same procedure but now keep going to right until right child is available,
//    if not then go to left child and follow same procedure until you reach a leaf node.
//
// * Claculate the sum of covered node.
//  1) Calculate the sum of all tree nodes - sum of uncovered node = sum of covered nodes.
//
// reference : https://www.youtube.com/watch?v=hRk4in1Rg_M
function Node(data){
  return {
    data,
    left: null,
    right: null
  }
}


function _sumUncoverdNode(root, side){
	if(!root) return 0; 
	let sum = root.data;
	if(side === 'left') {
        sum += root.left ? _sumUncoverdNode(root.left, side) : root.right ? _sumUncoverdNode(root.right, side) : 0;
  }
  if(side === 'right') {
      sum += root.right ? _sumUncoverdNode(root.right, side) : root.left ? _sumUncoverdNode(root.left, side) : 0;
  }
  return sum;
}
function _TreeSum(root){
	if(!root) return 0;
  let LSum = root.left ? _TreeSum(root.left) : 0;
  let RSum = root.right ? _TreeSum(root.right) : 0;
  return LSum + RSum + root.data;
}

function sumOfCoveredAndUncoveredNode(root){debugger;
	let sumLeftUC = _sumUncoverdNode(root.left, 'left');
	let sumRightUC = _sumUncoverdNode(root.right, 'right');
	let uncoveredSum = sumLeftUC + sumRightUC + root.data;
	
	let treeSum = _TreeSum(root);
	return (uncoveredSum === (treeSum - uncoveredSum));
}


//Create Tree
let root = Node(8);
root.left = Node(3); root.right = Node(10);
root.left.left = Node(1); root.left.right = Node(6);
root.left.right.left = Node(4);  root.left.right.right = Node(7);
root.right.right = Node(14);  root.right.right.left = Node(13);

//               8
//             /   \
//           3       10
//         /  \        \
//        1    6        14
//            / \      /
//           4   7    13

// Uncovered nodes = 1,3,8,10,14,13



