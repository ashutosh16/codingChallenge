// Print all nodes at a given level
{
  
   //Alternate solution DFS
  function FindNthLevelNodes(root, level, currentLevel =1 , resultList =[]) { debugger;
    if(!root) return resultList;
    if(currentLevel === level) return resultList.push(root.data) && resultList;
    (root.left) && FindNthLevelNodes(root.left, level, currentLevel+1, resultList);
    (root.right) && FindNthLevelNodes(root.right, level, currentLevel+1, resultList);
    return resultList;
  }
  
  function Node(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  
  //BFS HINT: Keep the null as pointer between each level
  function PrintNthLevelNode(root,L){
     const st = [null, root];
     let level=0;
     while(st.length) {
      const item = st.pop();
      if(item === null) {
         level ++;
         if(level === L) {
           return st;
         }
         st.push(null);
      } else {
         (item.left !== null) && st.push(item.left);
         (item.right !== null) && st.push(item.right);
      }
     }
     return [];
  }
  
  let root = new Node(1);
  root.left = new Node(2);
  root.right = new Node(3);
  root.left.left = new Node(4);
  root.left.right = new Node(5);
  root.right.left = new Node(6);
  root.right.right = new Node(7);

  
 
  
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
