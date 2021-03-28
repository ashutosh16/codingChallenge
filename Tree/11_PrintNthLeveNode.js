// Print all nodes at a given level
{
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  
    let root = new Node(1);
    root.left = new Node(2);
    root.right = new Node(3);
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    root.right.left = new Node(6);
    root.right.right = new Node(7);

  
  //Alternate solution
  function FindNthLevelNodes(root, level, currentLevel =1 , resultList =[]) { debugger;
    if(!root) return resultList;
    if(currentLevel === level) return resultList.push(root.data) && resultList;
    (root.left) && FindNthLevelNodes(root.left, level, currentLevel+1, resultList);
    (root.right) && FindNthLevelNodes(root.right, level, currentLevel+1, resultList);
    return resultList;
 }
  
  FindNthLevelNodes(root, 3);
}

  

  //Input
  /*         1        */
  /*       /   \      */
  /*     2      3     */
  /*    /  \  /   \   */
  /*   4   5  6   7   */
  // Output
  // 4 - 5 - 6 - 7 - 
}
