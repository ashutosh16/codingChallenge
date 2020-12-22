// Find all possible binary trees with given Inorder Traversal

{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  function Tree (arr, start = 0, end = arr.length-1) {
    let trees = [];
    if (start > end) trees.push(null);

    for(let i = start; i <= end; i++) { // consider 0 to end all as root node one by one.
      let leftTree = Tree(arr, start, i - 1); // find left subtrees possiblr for node i
      let rightTree = Tree(arr, i + 1, end); // find right subtrees possiblr for node i

      // make all combinations of leftTree and rightTree
      for(let j = 0; j < leftTree.length; j++)
      for(let k = 0; k < rightTree.length; k++) {
        // cretate result tree and push in result arr.
        let root = new Node(arr[i]);
        root.left = leftTree[j];
        root.right = rightTree[k];
        trees.push(root);
      }
    }
    return trees;
  }
  
  let result = Tree([4, 5, 7]);

  console.log(result);

  //Output
  // 4 5 7
  // 4 7 5
  // 5 4 7
  // 7 4 5
  // 7 5 4 
}
